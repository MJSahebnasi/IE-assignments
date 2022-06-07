const express = require('express');
const app = express();

const Entities = require('./entities')
const User = Entities.User;
const Group = Entities.Group;

const authRouter = require('./routes/auth')

app.use('/auth', authRouter)

app.listen(3000, () => console.log('listening on port 3000 ...'))