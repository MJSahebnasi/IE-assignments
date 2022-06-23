const express = require('express');
const router = express.Router();
const Student = require('../models').Student;

// create new student:
router.post("/", async(req, res) => {
    let student_id = req.body.studentid;

    const allStds = await Student.find();
    let all_std_ids = allStds.map(s => s.student_id)
    if (all_std_ids.includes(student_id)){
        res.status(400).send("there's already a student with this ID :(");
        return
    }

    let student = new Student({
        student_id: Number(student_id)
    });

    let result = await student.save();
    res.status(200).json({studentid: result.student_id, average: result.average, 
        courses: result.courses, last_updated: result.last_updated, code: "200",
        message: "student added successfully!"});

    // // log:
    // console.log(result);
})

// get all students:
router.get("/", async(req, res) => {
    const allStds = await Student.find();
    let students = allStds.map(
        s => {return {studentid: s.student_id, average: s.average, 
            courses: s.courses, last_updated: s.last_updated}}
    )
    return res.status(200).json({size: allStds.length, students: students, code: "200",
        message: "All students recieved successfully!"});
})

router.put("/:id", (req, res) => {
    // get update a stud
    res.status(200).send('update a stud');

    // let result = login(req.body.email, req.body.password);
    // if (result)
    //     res.status(200).json(result);
    // else
    //     res.status(400).json(bad_req);
})

router.delete("/:id", (req, res) => {
    // delete a stud
    res.status(200).send('delete a stud');

    // let result = login(req.body.email, req.body.password);
    // if (result)
    //     res.status(200).json(result);
    // else
    //     res.status(400).json(bad_req);
})

module.exports = router;