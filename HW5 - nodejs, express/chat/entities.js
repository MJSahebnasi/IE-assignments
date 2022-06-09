class User {
    // this 'rule' actually was supposed to be 'role'
    constructor(id, name, email, password, token, group = null, rule = null, time_added_to_gp = null) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token;
        this.group = group;
        this.rule = rule;
        this.time_added_to_gp = time_added_to_gp;
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

module.exports = {
    User: User,
    Group: Group,
    JoinRequest: JoinRequest,
    ConnectionRequest: ConnectionRequest
}

