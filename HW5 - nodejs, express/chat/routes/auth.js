const express = require('express');
const router = express.Router();
const signup = require('../controller/auth').signup;
const users = require('../model/dataBaze').users

// TODO post
router.get("/signup", (req, res) => {
    signup('name', 'em', 123);
    res.send(users);
})

// TODO post
router.get("/login", (req, res) => {
    res.send('login TODO');
})

module.exports = router;