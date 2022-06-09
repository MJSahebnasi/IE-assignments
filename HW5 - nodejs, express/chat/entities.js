class User {
    // this 'rule' actually was supposed to be 'role'
    constructor(id, name, email, password, token, group = null, rule = null) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token;
        this.group = group;
        this.rule = rule;
    }
}

class Group {
    constructor(id, name, description, members) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.members = members; //this contians user IDs
    }
}

class JoinRequest {
    constructor(id, groupId, userId, date) {
        this.id = id;
        this.groupId = groupId;
        this.userId = userId;
        this.date = date;
    }
}

class ConnectionRequest {
    constructor(connectionRequestId, sending_groupId, recieving_groupId, sent) {
        this.connectionRequestId = connectionRequestId;
        this.sending_groupId = sending_groupId;
        this.recieving_groupId = recieving_groupId;
        this.sent = sent;
    }
}

class Message {
    constructor(message, date, sentby) {
        this.message = message;
        this.date = date;
        this.sentby = sentby;
    }
}

class Chat {
    constructor(user1, user2, messages = []) {
        this.user1 = user1;
        this.user2 = user2;
        this.messages = messages;
    }
}

module.exports = {
    User: User,
    Group: Group,
    JoinRequest: JoinRequest,
    ConnectionRequest: ConnectionRequest,
    Message: Message,
    Chat: Chat
}

