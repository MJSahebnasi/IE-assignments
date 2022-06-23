class Student {
    constructor(id, last_updated, average = null, courses = null) {
        this.id = id;
        this.last_updated = last_updated;
        this.average = average;
        this.courses = courses;
    }
}

class Course {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }
}

module.exports = {
    Student: Student,
    Course: Course
}

