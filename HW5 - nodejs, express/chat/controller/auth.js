const jwt = require('jsonwebtoken')

const data = require('../model/dataBaze')
const users = data.users;
const entities = require('../entities')
const User = entities.User;

exports.signup = function (name, email, password) {
    let userEmails = users.map(user => user.email);
    if (userEmails.includes(email))
        return undefined;
    // let token = jwt.sign({name: name}, process.env.ACCESS_TOKEN_SECRET);
    let token = jwt.sign({name: name}, 'secret_string');
    let newUser = new User(users.length, name, email, password, token);
    users.push(newUser);
    return {token: token, message: 'successful'};
};