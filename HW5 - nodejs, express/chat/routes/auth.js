const express = require('express');
const router = express.Router();
const signup = require('../controller/auth').signup;
const users = require('../model/dataBaze').users
const bad_req = require('./jsonResults').bad_req

router.post("/signup", (req, res) => {
    let result = signup(req.body.name, req.body.email, req.body.password);
    if (result)
        res.status(200).json(result);
    else
        res.status(400).json(bad_req);
})

// TODO post
router.get("/login", (req, res) => {
    res.send('login TODO');
})

module.exports = router;