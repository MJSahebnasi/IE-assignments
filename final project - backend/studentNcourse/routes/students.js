const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    // create new one
    res.status(200).send('new stud');

    // let result = signup(req.body.name, req.body.email, req.body.password);
    // if (result)
    //     res.status(200).json(result);
    // else
    //     res.status(400).json(bad_req);

    // // log:
    // console.log('--- users:', users);
})

router.get("/", (req, res) => {
    // get all studs
    res.status(200).send('all studs');

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