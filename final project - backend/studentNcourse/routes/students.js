const express = require('express');
const router = express.Router();
const Student = require('../models').Student;

router.post("/", async(req, res) => {
    // create new one
    // return res.status(200).send('new stud');

    let student_id = req.body.studentid;
    let student = new Student({
        student_id: Number(student_id)
    });

    let result = await student.save();
    console.log(result);
    res.status(200).json(result);

    // let result = signup(req.body.name, req.body.email, req.body.password);
    // if (result)
    //     res.status(200).json(result);
    // else
    //     res.status(400).json(bad_req);

    // // log:
    // console.log('--- users:', users);
})

router.get("/", async(req, res) => {
    // get all studs
    const allStds = await Student.find();
    return res.status(200).json(allStds);

    // let result = login(req.body.email, req.body.password);
    // if (result)
    //     res.status(200).json(result);
    // else
    //     res.status(400).json(bad_req);
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