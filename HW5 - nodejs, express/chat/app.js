const express = require('express')
const app = express()

app.use(express.json())

const Entities = require('./entities')
const User = Entities.User;
const Group = Entities.Group;

const authRouter = require('./routes/auth')
const groupsRouter = require('./routes/groups')
const joinRequestsRouter = require('./routes/join_requests')

// TODO: /api/v1/
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/groups', groupsRouter)
app.use('/api/v1/join_requests', joinRequestsRouter)

app.listen(3000, () => console.log('listening on port 3000 ...'))