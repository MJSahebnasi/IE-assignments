const jwt = require('jsonwebtoken')

const data = require('../model/dataBaze')
const users = data.users;
const entities = require('../entities')
const User = entities.User;
const bcrypt = require('bcrypt')

require("dotenv")
  .config();

exports.signup = function (name, email, password) {
    let userEmails = users.map(user => user.email);
    if (userEmails.includes(email))
        return undefined;

    let id = users.length;
    let token = jwt.sign({userId: id}, process.env.ACCESS_TOKEN_SECRET);
    let newUser = new User(id, name, email, bcrypt.hashSync(password, 8), token);
    users.push(newUser);
    return {token: token, message: 'successful'};
};

exports.login = function (email, password) {
    let foundUsers = users.filter(user => user.email === email);

    if (foundUsers.length === 0)
        return undefined;
    let user = foundUsers[0];
    let passwordIsCorrect = bcrypt.compareSync(
        password,
        user.password
      );
    if (passwordIsCorrect)
        return {token: user.token, message: "successful"};
    return undefined;
}