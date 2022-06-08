const jwt = require('jsonwebtoken')

const data = require('../model/dataBaze')
const users = data.users;
const entities = require('../entities')
const User = entities.User;

require("dotenv")
  .config();

exports.signup = function (name, email, password) {
    let userEmails = users.map(user => user.email);
    if (userEmails.includes(email))
        return undefined;

    let id = users.length;
    let token = jwt.sign({id: id}, process.env.ACCESS_TOKEN_SECRET);
    let newUser = new User(id, name, email, password, token);
    users.push(newUser);
    return {token: token, message: 'successful'};
};