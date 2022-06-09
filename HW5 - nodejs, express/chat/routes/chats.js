const express = require('express')
const { Chat, Message } = require('../entities')
const router = express.Router()
const bad_req = require('./jsonResults').bad_req
const authJWT = require('../controller/authorize').authJWT
var group_connections = require('../model/dataBaze').group_connections
var find_connection_of_gp = require('../model/dataBaze').find_connection_of_gp
const groups = require('../model/dataBaze').groups
const users = require('../model/dataBaze').users
const chats = require('../model/dataBaze').chats

const find_chat = function (user1, user2) {
    return chats.find(c => (c.user1 === user1 && c.user2 === user2)
        || (c.user1 === user2 && c.user2 === user1));
}

const array_equals = function (array1, array2) {
    return (array1.length == array2.length) && array1.every(function (element, index) {
        return element === array2[index];
    });
}

// send message:
router.post("/:user_id", authJWT, (req, res) => {
    let user1_id = req.userId.userId;
    let user1 = users.find(u => u.id === user1_id);

    let user2_id = parseInt(req.params.user_id);
    let user2 = users.find(u => u.id === user2_id);

    if (!user1 || !user2) {
        res.status(400).json(bad_req);
        return
    }

    let group1_id = user1.group;
    let group2_id = user2.group;

    let gp1_connection = find_connection_of_gp(group1_id, group_connections)
    let gp2_connection = find_connection_of_gp(group2_id, group_connections)

    if (!gp1_connection || !gp2_connection || !array_equals(gp1_connection, gp1_connection)) {
        // not allowed
        res.status(400).json(bad_req);
        return
    }

    var chat = find_chat(user1_id, user2_id);
    if (!chat) {
        chat = new Chat(user1_id, user2_id);
        chats.unshift(chat);
    }
    let message = new Message(req.body.message, Date.now(), user1_id);
    chat.messages.unshift(message);

    res.status(200).json({ message: "successful" });
    
    // log:
    console.log('---chats:', chats);
    console.log('---chat:', chat);
})

// get your group's requests:
// router.get("/", authJWT, (req, res) => {
//     let userId = req.userId.userId;
//     let user = users.find(u => u.id === userId);

//     if (!user || user.rule !== 'owner') {
//         res.status(400).json(bad_req);
//         return
//     }

//     let recieving_groupId = user.group;
//     let my_reqs = connection_requests.filter(cr => cr.recieving_groupId === recieving_groupId);

//     res.status(200).json({requests: my_reqs.map(cr => {return {
//         connectionRequestId: cr.connectionRequestId,
//         groupId: cr.sending_groupId,
//         sent: cr.sent
//     }})});
// })

// // accept a request:
// router.post("/accept", authJWT, (req, res) => {
//     let userId = req.userId.userId;
//     let user = users.find(u => u.id === userId);
//     let connection_request = connection_requests.find(cr => cr.connectionRequestId === req.body.connectionRequestId);

//     if (!connection_request || !user || user.rule !== 'owner'
//             || user.group !== connection_request.recieving_groupId ) {
//         res.status(400).json(bad_req);
//         return
//     }

//     let sender_connection = find_connection_of_gp(connection_request.sending_groupId, group_connections);
//     let reciever_connection = find_connection_of_gp(connection_request.recieving_groupId, group_connections);

//     if(!sender_connection && !reciever_connection){
//         // both isolated:
//         let new_connection = [connection_request.sending_groupId, connection_request.recieving_groupId];
//         group_connections.push(new_connection);
//     }
//     else if(!sender_connection && reciever_connection){
//         reciever_connection.push(connection_request.sending_groupId)
//     }
//     else if(sender_connection && !reciever_connection){
//         sender_connection.push(connection_request.recieving_groupId)
//     }
//     else{
//         let new_connection = sender_connection.concat(reciever_connection);
//         group_connections.splice(group_connections.indexOf(sender_connection), 1);
//         group_connections.splice(group_connections.indexOf(reciever_connection), 1);
//         group_connections.push(new_connection);
//     }

//     connection_requests.splice(connection_requests.indexOf(connection_request), 1);

//     res.status(200).json({"message": "successful"});

//     //---log:
//     console.log('---group_connections:', group_connections);
//     console.log('---connection_requests:', connection_requests);
// })

module.exports = router;