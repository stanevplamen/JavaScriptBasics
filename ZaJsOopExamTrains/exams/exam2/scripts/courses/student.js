define([], function () {

    var Student = (function () {

        // hidden data only for Student

        // generation of id`s
        var lastStudentId = 0;
        function Student(params) {

            this._id = ++lastStudentId;

            this.name = params.name;
            this.exam = params.exam;
            this.homework = params.homework;
            this.attendance = params.attendance;
            this.teamwork = params.teamwork;
            this.bonus = params.bonus;
        }

        return Student;

    }());

    return Student;
});