const express = require('express');
const router = express.Router();

router.post("/:student_id/course", (req, res) => {
    // create new one
    res.status(200).send('new crs for stud');

    // let result = signup(req.body.name, req.body.email, req.body.password);
    // if (result)
    //     res.status(200).json(result);
    // else
    //     res.status(400).json(bad_req);

    // // log:
    // console.log('--- users:', users);
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