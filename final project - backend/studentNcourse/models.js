const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema(
    {
      course_id: Number,
    //   student_id: Number,
      name: String,
      grade: Number
    }
);

var studentSchema = new mongoose.Schema(
    {
      student_id: Number,
      last_updated: Date,
      average: Number,
      courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
    }
);

const Course = mongoose.model('Course', courseSchema);
const Student = mongoose.model('Student', studentSchema);

module.exports = {
    Student: Student,
    Course: Course
}