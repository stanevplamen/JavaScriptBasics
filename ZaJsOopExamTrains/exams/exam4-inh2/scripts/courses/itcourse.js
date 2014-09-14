define(['courses/student', 'courses/course', ], function (Student, Course) {

    var ItCourse = (function () {

        function ItCourse(title, formula, itType) {
            Course.call(this, title, formula);
            this._itType = itType;
            //this.type = 'SomeType';
        }

        ItCourse.prototype.saytype = function () {
            return this._itType;
        };

        ItCourse.prototype.addStudent = function (student) {
            Course.prototype.addStudent.call(this, student);
        };

        ItCourse.prototype.calculateResults = function () {
            Course.prototype.calculateResults.call(this);
        };

        ItCourse.prototype.getTopStudentsByExam = function (count) {
            return Course.prototype.getTopStudentsByExam.call(this, count);
        };

        ItCourse.prototype.getTopStudentsByTotalScore = function (count) {
            return Course.prototype.getTopStudentsByTotalScore.call(this, count);
        };

        return ItCourse;

        //return {
        //    Course: Course
        //}

    }());


    return ItCourse;
});