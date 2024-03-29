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

    if (!user || user.group !== null) {
        res.status(400).json(bad_req);
        return
    }

    let group = new Group(groups.length, req.body.name, req.body.description, [userId])

    user.rule = 'owner';
    user.group = group.id;

    groups.unshift(group);

    res.status(200).json({ group: { id: group.id.toString() }, message: "successful" });

    // log:
    console.log('---groups:', groups);
    // console.log(group.members);
})

// get list of groups:
router.get("/", authJWT, (req, res) => {
    let result = groups.map(group => { return { id: group.id, name: group.name, description: group.description } })
    res.status(200).json({ groups: result });
})

// get list of groups:
router.get("/my", authJWT, (req, res) => {
    let userId = req.userId.userId;
    let user = users.find(u => u.id === userId);
    if (!user || user.group === null) {
        res.status(400).json(bad_req);
        return
    }
    let group = groups.find(g => g.id === user.group);
    let members = group.members.map(userId => users.find(u => u.id === userId))
        .map(user => { return { id: user.id, name: user.name, email: user.email, rule: user.rule } });

    res.status(200).json({ name: group.name, description: group.description, members: members });
})

module.exports = router;