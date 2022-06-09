const express = require('express')
const { Chat, Message } = require('../entities')
const router = express.Router()
const bad_req = require('./jsonResults').bad_req
const authJWT = require('../controller/authorize').authJWT
var group_connections = require('../model/dataBaze').group_connections
var find_connection_of_gp = require('../model/dataBaze').find_connection_of_gp
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

// get user's chats:
router.get("/", authJWT, (req, res) => {
    let id = req.userId.userId;
    let user = users.find(u => u.id === id);

    if (!user) {
        res.status(400).json(bad_req);
        return
    }

    let user_chats = chats.filter(c => c.user1 === id || c.user2 === id);

    let results = [];
    for (let i=0; i<user_chats.length; i++){
        let c = user_chats[i];
        let userId;
        if (c.user1 === id)
            userId = c.user2;
        else
            userId = c.user1;
        let user_name = users.find(u => u.id === userId).name;
        results.unshift({userId: userId, name: user_name});
    }

    res.status(200).json({chats: results});
})

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

// get messages in a chat:
router.get("/:user_id", authJWT, (req, res) => {
    let user1_id = req.userId.userId;
    let user1 = users.find(u => u.id === user1_id);

    let user2_id = parseInt(req.params.user_id);
    let user2 = users.find(u => u.id === user2_id);

    var chat = find_chat(user1_id, user2_id);

    if (!user1 || !user2 || !chat) {
        res.status(400).json(bad_req);
        return
    }

    res.status(200).json({messages: chat.messages});
})

module.exports = router;