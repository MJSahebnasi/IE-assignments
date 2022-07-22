const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

const studentsRouter = require('./routes/students')
const coursesRouter = require('./routes/courses')

app.use('/students', studentsRouter)
app.use(coursesRouter)

mongoose.connect('mongodb://localhost:27017/IE_final_proj')
    .then(console.log('Connected to DB'))
    .catch(error => console.log(error));
app.listen(3000, () => console.log('listening on port 3000 ...'))