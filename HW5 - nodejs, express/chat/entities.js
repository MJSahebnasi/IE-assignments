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

module.exports = {
    User: User,
    Group, Group
}

