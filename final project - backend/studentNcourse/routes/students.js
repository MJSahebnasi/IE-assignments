const express = require('express');
const router = express.Router();
const Student = require('../models').Student;

// create new student:
router.post("/", async (req, res) => {
    let student_id = req.body.studentid;

    // not a pro move, I know (better approach in update route)
    const retrieved_students = await Student.find();
    let all_std_ids = retrieved_students.map(s => s.student_id)
    if (all_std_ids.includes(student_id)) {
        res.status(400).send("there's already a student with this ID :(");
        return
    }

    let student = new Student({
        student_id: Number(student_id)
    });

    let result = await student.save();
    res.status(200).json({
        studentid: result.student_id, average: result.average,
        courses: result.courses, last_updated: result.last_updated, code: "200",
        message: "student added successfully!"
    });

    // // log:
    // console.log(result);
})

// get all students:
router.get("/", async (req, res) => {
    const retrieved_students = await Student.find();
    let students = retrieved_students.map(
        s => {
            return {
                studentid: s.student_id, average: s.average,
                courses: s.courses, last_updated: s.last_updated
            }
        }
    )
    return res.status(200).json({
        size: retrieved_students.length, students: students, code: "200",
        message: "All students recieved successfully!"
    });
})

// update a student_id:
router.put("/:id", async (req, res) => {
    let old_student_id = req.params.id;
    let new_student_id = req.body.studentid;

    let students_with_old_id = await Student.find({ student_id: old_student_id });
    if (students_with_old_id.length === 0) {
        res.status(400).send(`there's no student with this OLD ID (${old_student_id}) :(`);
        return
    }

    let students_with_new_id = await Student.find({ student_id: new_student_id });
    if (students_with_new_id.length > 0) {
        res.status(400).send(`there's already a student with this NEW ID (${new_student_id}) :(`);
        return
    }

    let result = await Student.findOneAndUpdate({ student_id: old_student_id },
        { student_id: new_student_id }, { returnOriginal: false });

    res.status(200).json({
        studentid: result.student_id, average: result.average,
        courses: result.courses, last_updated: result.last_updated, code: "200",
        message: `studentid changed from ${old_student_id} to ${new_student_id} successfully!`
    });
})

// delete a student:
router.delete("/:id", async (req, res) => {
    let student_id = req.params.id;
    let students_with_id = await Student.find({ student_id: student_id });
    if (students_with_id.length === 0) {
        res.status(400).send(`there's no student with this ID (${student_id}) :(`);
        return
    }
    let result = await Student.findOneAndDelete({ student_id: student_id });
    res.status(200).json({
        studentid: result.student_id, average: result.average,
        courses: result.courses, last_updated: result.last_updated, code: "200",
        message: 'student deleted successfully!'
    });
})

module.exports = router;