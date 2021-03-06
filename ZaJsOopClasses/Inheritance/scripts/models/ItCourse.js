﻿var ItCourse = (function () {

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

    ItCourse.prototype = Object.create(Course.prototype); // See note below

    // Set the "constructor" property to refer to Student
    ItCourse.prototype.constructor = Course;

    return ItCourse;

    //return {
    //    Course: Course
    //}

}());