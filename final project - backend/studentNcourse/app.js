const express = require('express')
const app = express()

app.use(express.json())

const studentsRouter = require('./routes/students')
const coursesRouter = require('./routes/courses')

app.use('/students', studentsRouter)
app.use(coursesRouter)

app.listen(3000, () => console.log('listening on port 3000 ...'))