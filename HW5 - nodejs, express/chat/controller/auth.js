const data = require('../model/dataBaze')
const users = data.users;
const entities = require('../entities')
const User = entities.User;

userNames = users.map(user => user.name);

exports.signup = function (name, email, password) {
    if (userNames.includes(name))
        return false;
    let token = "TODO";
    let newUser = new User(users.length, name, email, password, token);
    users.push(newUser);
};