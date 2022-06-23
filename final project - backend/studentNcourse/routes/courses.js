const express = require('express');
const router = express.Router();
const Student = require('../models').Student;
const Course = require('../models').Course;

function calc_avr(grades){
    if (grades.length === 0)
        return 0;
    return grades.reduce((partialSum, a) => partialSum + a, 0)/grades.length;
}

router.post("/:student_id/course", async(req, res) => {
    let student_id = req.params.student_id;

    let students_with_id = await Student.find({ student_id: student_id });
    if (students_with_id.length === 0) {
        res.status(400).send(`there's no student with this ID (${student_id}) :(`);
        return
    }

    let crs_names = students_with_id[0].courses.map(c => c.name);
    let crs_ids = students_with_id[0].courses.map(c => c.course_id);
    
    // console.log(crs_names)
    // console.log(crs_ids)

    if (crs_names.includes(req.body.name) || crs_ids.includes(req.body.id)){
        res.status(400).send(`there's already a course with this ID/name :(`);
        return
    }

    let course = new Course(req.body.id, req.body.name, req.body.grade);

    await Student.findOneAndUpdate({ student_id: student_id },
        { $push: { courses: course }}, { returnOriginal: false });

    // updating average
    students_with_id = await Student.find({ student_id: student_id });
    let grades = students_with_id[0].courses.map(c => c.grade);
    await Student.findOneAndUpdate({ student_id: student_id },
        { average: calc_avr(grades) }, { returnOriginal: false });

    // updating last_updated
    await Student.findOneAndUpdate({ student_id: student_id },
        { last_updated: Date.now() }, { returnOriginal: false });

    res.send({name:req.body.name, id:req.body.id, grade:req.body.grade, code: 200, 
        message:"course added succesfully!"});
})

router.get("/:student_id", async(req, res) => {
    let student_id = req.params.student_id;
    let students_with_id = await Student.find({ student_id: student_id });
    if (students_with_id.length === 0) {
        res.status(400).send(`there's no student with this ID (${student_id}) :(`);
        return
    }
    res.status(200).json(students_with_id.map(
        s => {
            return {
                studentid: s.student_id, average: s.average,
                courses: s.courses, last_updated: s.last_updated
            }
        }
    )[0]);
})

router.put("/:student_id/:course_id", async(req, res) => {
    let student_id = req.params.student_id;
    let students_with_id = await Student.find({ student_id: student_id });
    if (students_with_id.length === 0) {
        res.status(400).send(`there's no student with this ID (${student_id}) :(`);
        return
    }

    let course_id = req.params.course_id;
    let crs_ids = students_with_id[0].courses.map(c => c.course_id);

    // console.log(typeof course_id)
    // console.log(typeof crs_ids[0])

    if (!crs_ids.includes(parseInt(course_id))) {
        res.status(400).send(`this student has no course with this ID (${course_id}) :(`);
        return
    }

    // check if this new info is valid ...

    let course = new Course(req.body.id, req.body.name, req.body.grade);
    let new_courses = students_with_id[0].courses.filter(c => c.course_id !== course_id);
    new_courses.push(course);

    await Student.findOneAndUpdate({ student_id: student_id },
        { $set: { courses: new_courses }}, { returnOriginal: false });

    // updating average
    students_with_id = await Student.find({ student_id: student_id });
    let grades = students_with_id[0].courses.map(c => c.grade);
    await Student.findOneAndUpdate({ student_id: student_id },
        { average: calc_avr(grades) }, { returnOriginal: false });

    // updating last_updated
    await Student.findOneAndUpdate({ student_id: student_id },
        { last_updated: Date.now() }, { returnOriginal: false });

    res.send({name:req.body.name, id:req.body.id, grade:req.body.grade, code: 200, 
        message:"course updated succesfully!"});
})

router.delete("/:student_id/:course_id", async(req, res) => {
    let student_id = parseInt(req.params.student_id);
    let students_with_id = await Student.find({ student_id: student_id });
    if (students_with_id.length === 0) {
        res.status(400).send(`there's no student with this ID (${student_id}) :(`);
        return
    }

    let course_id = parseInt(req.params.course_id);
    let crs_ids = students_with_id[0].courses.map(c => c.course_id);
    if (!crs_ids.includes(course_id)) {
        res.status(400).send(`this student has no course with this ID (${course_id}) :(`);
        return
    }

    let to_be_deleted_course = students_with_id[0].courses.filter(c => c.course_id === course_id)[0];
    
    // console.log(typeof to_be_deleted_course.course_id);
    // console.log(typeof course_id);
    
    let to_be_deleted_course_name = to_be_deleted_course.name;
    let to_be_deleted_course_id = course_id;
    let to_be_deleted_course_grade = to_be_deleted_course.grade;

    let new_courses = students_with_id[0].courses.filter(c => c.course_id !== course_id);

    await Student.findOneAndUpdate({ student_id: student_id },
        { $set: { courses: new_courses }}, { returnOriginal: false });

    // updating average
    students_with_id = await Student.find({ student_id: student_id });
    let grades = students_with_id[0].courses.map(c => c.grade);
    await Student.findOneAndUpdate({ student_id: student_id },
        { average: calc_avr(grades) });

    // updating last_updated
    await Student.findOneAndUpdate({ student_id: student_id },
        { last_updated: Date.now() });

    res.send({
        name: to_be_deleted_course_name, 
        id: to_be_deleted_course_id, 
        grade: to_be_deleted_course_grade,
        code: 200, 
        message:"course deleted succesfully!"});
})

module.exports = router;