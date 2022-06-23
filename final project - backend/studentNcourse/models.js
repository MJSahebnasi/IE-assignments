const mongoose = require('mongoose');

// var courseSchema = new mongoose.Schema(
//     {
//       course_id: Number,
//       name: String,
//       grade: Number
//     }
// );
class Course {
    constructor(course_id, name, grade) {
        this.course_id = course_id;
        this.name = name;
        this.grade = grade;
    }
}

var studentSchema = new mongoose.Schema(
    {
      student_id: {type: Number, required: true},
      last_updated: {type: Date, default: Date.now()},
      average: {type: Number, default: 0.0},
    //   courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' , default: []}]
    courses: {type: Array, default: []}
    }
);

// const Course = mongoose.model('Course', courseSchema);
const Student = mongoose.model('Student', studentSchema);

module.exports = {
    Student: Student,
    Course: Course
}