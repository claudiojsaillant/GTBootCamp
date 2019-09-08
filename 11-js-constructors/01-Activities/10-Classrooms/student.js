var Student = function (name, subject, gpa) {
    this.name = name;
    this.favsub = subject;
    this.gpa = gpa
}


module.exports = {
    student: Student
}