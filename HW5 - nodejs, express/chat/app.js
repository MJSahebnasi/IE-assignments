const express = require('express');
const app = express();

const Entities = require('./entities.js')
const User = Entities.User;
const Group = Entities.Group;

// app.get("/" , (req, res) => {
//     const user = new User(1, 'name', 'email');
//     res.send(user);
// })

app.listen(3000, () => console.log('listening on port 3000 ...'))