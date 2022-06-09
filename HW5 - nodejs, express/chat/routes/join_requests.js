const express = require('express')
const router = express.Router()
const bad_req = require('./jsonResults').bad_req
const authJWT = require('../controller/authorize').authJWT
const JoinRequest = require('../entities').JoinRequest
const join_requests = require('../model/dataBaze').join_requests
const groups = require('../model/dataBaze').groups
const users = require('../model/dataBaze').users

// send request:
router.post("/", authJWT, (req, res) => {
    let userId = req.userId.userId;
    let user = users.find(u => u.id === userId);

    let groupId = req.body.groupId;
    let group = groups.find(g => g.id === groupId);

    if (!group || !user || user.group !== null) {
        res.status(400).json(bad_req);
        return
    }

    let join_request = new JoinRequest(join_requests.length, groupId, userId, Date.now());
    join_requests.unshift(join_request);

    res.status(200).json({ message: "successful" });

    // log:
    console.log('---join_requests:', join_requests);
    // console.log(group.members);
})

module.exports = router;