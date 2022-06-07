class User {
    constructor(id, name, email, password, token, group = null, role = null) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token;
        this.group = group;
        this.role = role;
    }
}

class Group {
    constructor(id, name, description, members = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.members = members;
    }
}

module.exports = {
    User: User,
    Group, Group
}

