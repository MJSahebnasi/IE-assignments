const express = require('express')
const router = express.Router()
const bad_req = require('./jsonResults').bad_req
const authJWT = require('../controller/authorize').authJWT
const ConnectionRequest = require('../entities').ConnectionRequest
var connection_requests = require('../model/dataBaze').connection_requests
var group_connections = require('../model/dataBaze').group_connections
var find_connection_of_gp = require('../model/dataBaze').find_connection_of_gp
const groups = require('../model/dataBaze').groups
const users = require('../model/dataBaze').users

// send request:
router.post("/", authJWT, (req, res) => {
    let userId = req.userId.userId;
    let user = users.find(u => u.id === userId);

    if (!user || user.rule !== 'owner') {
        res.status(400).json(bad_req);
        return
    }

    let sending_groupId = user.group;
    let recieving_groupId = req.body.groupId;

    let id;
    if (connection_requests.length === 0)
        id = 0;
    else
        // first element 'cause array are ordered new to old
        id = connection_requests[0].connectionRequestId+1;
    let connection_request = new ConnectionRequest(id, sending_groupId, 
        recieving_groupId, Date.now());

    connection_requests.unshift(connection_request);

    res.status(200).json({ message: "successful" });

    // log:
    console.log('---connection_requests:', connection_requests);
})

// get your group's requests:
router.get("/", authJWT, (req, res) => {
    let userId = req.userId.userId;
    let user = users.find(u => u.id === userId);

    if (!user || user.rule !== 'owner') {
        res.status(400).json(bad_req);
        return
    }

    let recieving_groupId = user.group;
    let my_reqs = connection_requests.filter(cr => cr.recieving_groupId === recieving_groupId);

    res.status(200).json({requests: my_reqs.map(cr => {return {
        connectionRequestId: cr.connectionRequestId,
        groupId: cr.sending_groupId,
        sent: cr.sent
    }})});
})

// accept a request:
router.post("/accept", authJWT, (req, res) => {
    let userId = req.userId.userId;
    let user = users.find(u => u.id === userId);
    let connection_request = connection_requests.find(cr => cr.connectionRequestId === req.body.connectionRequestId);

    if (!connection_request || !user || user.rule !== 'owner'
            || user.group !== connection_request.recieving_groupId ) {
        res.status(400).json(bad_req);
        return
    }

    let sender_connection = find_connection_of_gp(connection_request.sending_groupId, group_connections);
    let reciever_connection = find_connection_of_gp(connection_request.recieving_groupId, group_connections);

    ////////////////////////////////
    console.log('### accept: ###');
    console.log('###sender id###', connection_request.sending_groupId);
    console.log('###rec id###', connection_request.recieving_groupId);
    console.log('###gp cons###', group_connections);
    console.log('###  ###', sender_connection);
    console.log('######', reciever_connection);
    ////////////////////////////////

    if(!sender_connection && !reciever_connection){
        // both isolated:
        let new_connection = [connection_request.sending_groupId, connection_request.recieving_groupId];
        group_connections.push(new_connection);
    }
    else if(!sender_connection && reciever_connection){
        console.log('### rec avail ###')
        reciever_connection.push(connection_request.sending_groupId)
    }
    else if(sender_connection && !reciever_connection){
        console.log('### sen avail ###')
        sender_connection.push(connection_request.recieving_groupId)
    }
    else{
        console.log('### both avail ###')
        let new_connection = sender_connection.concat(reciever_connection);
        group_connections.splice(group_connections.indexOf(sender_connection), 1);
        group_connections.splice(group_connections.indexOf(reciever_connection), 1);
        group_connections.push(new_connection);
    }

    connection_requests.splice(connection_requests.indexOf(connection_request), 1);

    res.status(200).json({"message": "successful"});
    
    //---log:
    console.log('---group_connections:', group_connections);
    console.log('---connection_requests:', connection_requests);
})

module.exports = router;