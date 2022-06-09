const express = require('express')
const app = express()

app.use(express.json())

const authRouter = require('./routes/auth')
const groupsRouter = require('./routes/groups')
const joinRequestsRouter = require('./routes/join_requests')
const connectionRequestsRouter = require('./routes/connection_requests')
const chatsRouter = require('./routes/chats')

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/groups', groupsRouter)
app.use('/api/v1/join_requests', joinRequestsRouter)
app.use('/api/v1/connection_requests', connectionRequestsRouter)
app.use('/api/v1/chats', chatsRouter)


app.listen(3000, () => console.log('listening on port 3000 ...'))