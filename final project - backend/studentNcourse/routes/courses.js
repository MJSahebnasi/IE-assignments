const express = require('express');
const router = express.Router();
const Student = require('../models').Student;
const Course = require('../models').Course;

router.post("/:student_id/course", async(req, res) => {
    let student_id = req.params.student_id;

    let students_with_id = await Student.find({ student_id: student_id });
    if (students_with_id.length === 0) {
        res.status(400).send(`there's no student with this ID (${student_id}) :(`);
        return
    }

    let course = new Course(req.body.id, req.body.name, req.body.grade);

    let result = await Student.findOneAndUpdate({ student_id: student_id },
        { $push: { courses: course }}, { returnOriginal: false });

    res.send({name:req.body.name, id:req.body.id, grade:req.body.grade, code: 200, 
        message:"course added succesfully!"});
})

router.get("/:student_id", (req, res) => {
    // get stud's info
    res.status(200).send('one studs info');

    // let result = login(req.body.email, req.body.password);
    // if (result)
    //     res.status(200).json(result);
    // else
    //     res.status(400).json(bad_req);
})

router.put("/:student_id/:course_id", (req, res) => {
    // update a studs crs
    res.status(200).send('update a studs crs');

    // let result = login(req.body.email, req.body.password);
    // if (result)
    //     res.status(200).json(result);
    // else
    //     res.status(400).json(bad_req);
})

router.delete("/:student_id/:course_id", (req, res) => {
    // delete a studs crs
    res.status(200).send('delete a stud crs');

    // let result = login(req.body.email, req.body.password);
    // if (result)
    //     res.status(200).json(result);
    // else
    //     res.status(400).json(bad_req);
})

module.exports = router;