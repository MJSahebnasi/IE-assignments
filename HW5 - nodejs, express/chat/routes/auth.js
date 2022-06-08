const express = require('express');
const router = express.Router();
const signup = require('../controller/authenticate').signup;
const login = require('../controller/authenticate').login;
const users = require('../model/dataBaze').users
const bad_req = require('./jsonResults').bad_req

router.post("/signup", (req, res) => {
    let result = signup(req.body.name, req.body.email, req.body.password);
    if (result)
        res.status(200).json(result);
    else
        res.status(400).json(bad_req);

    // log:
    console.log('--- users:', users);
})

router.post("/login", (req, res) => {
    let result = login(req.body.email, req.body.password);
    if (result)
        res.status(200).json(result);
    else
        res.status(400).json(bad_req);
})

module.exports = router;