const express = require('express')
const router = express.Router()
const bad_req = require('./jsonResults').bad_req
const authJWT = require('../controller/authorize').authJWT
const Group = require('../entities').Group
const groups = require('../model/dataBaze').groups
const users = require('../model/dataBaze').users

// create group:
router.post("/", authJWT, (req, res) => {
    let userId = req.userId.userId;
    let user = users.find(u => u.id === userId);

    if (!user || user.group)
        res.status(400).json(bad_req);

    let group = new Group(groups.length, req.body.name, req.body.description, [userId])
    
    // TODO: find user using id
    // user.time_added_to_gp = 
    // user.rule = 'owner';
    // user.group = group;

    groups.push(group);

    res.status(200).json({group: {id: group.id}, message: "successful"});

    // log:
    console.log(groups);
    // console.log(group.members);
})

module.exports = router;