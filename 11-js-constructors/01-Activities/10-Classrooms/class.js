var stuData = require('./student.js');

var Classroom = function(profName,room) {
    this.students = [];
    this.studentNumber = 0;
    this.professorName = profName;
    this.roomNum = room;
    this.addStudent = function(name,subject,gpa){
       this.students.push(new stuData.student(name,subject,gpa));
       this.studentNumber++
    }
}


var classroom1 = new Classroom('Frank', 19);
console.log(classroom1);

classroom1.addStudent('Claudio', 'Math', '3.4');
classroom1.addStudent('Manuel', 'History', '3.7');

console.log(classroom1);