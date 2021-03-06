﻿var Course = (function () {

    // hidden data only for Course
    function calculateTotalScoreFor(student) {
        var result = this._formula(student);
        return result;
    }

    // creating private method to reduse code repeating
    function returnTopStudentsSortedBy(sortBy, count) {
        if (!this._totalScores || this._totalScores.length !== this._students.length) {
            this.calculateResults();
        }

        count = count || this._totalScores.length;
        var totalScores = this._totalScores.slice(0); // copy of the array
        totalScores.sort(sortBy);

        // return totalScores.slice(0, count); // returning exact number -> count
        // till now the functions returs objects student, total score
        // making map function
        return totalScores.map(function (student) {
            //var studentToReturn = student.student;
            // for being other referation
            var studentToReturn = Object.create(student.student); // making a copy
            studentToReturn.totalScore = student.totalScore;
            return studentToReturn;
        }).slice(0, count);

        // the other version is to return new object
        //return {
        //    name: student.student.name
        //}
    }


    // defining the different sorting functions
    function sortByExam(st1, st2) {
        // descending sort
        return st2.student.exam - st1.student.exam;
        // ascending sort
        // return st1.student.exam - st2.student.exam;
    }
    function sortByTotalScore(st1, st2) {
        return st2.totalScore - st1.totalScore;
    }

    // function constructor
    function Course(title, formula) {
        this._students = [];
        this._title = title;
        this._formula = formula;
    }

    Course.prototype = {
        addStudent: function (student) {
            if (!(student instanceof Student)) {
                throw {
                    message: 'Trying to add an objects that is not an instance of Student'
                }
            }
            this._students.push(student);
            // returting the same function to allow chaining
            return this;
        },
        calculateResults: function () {

            var i, len, student, studentTotalScore;

            this._totalScores = [];
            len = this._students.length;
            for (i = 0; i < len; i++) {
                student = this._students[i];
                // public methods
                //studentTotalScore = this.calculateTotalScoreFor(student);
                // making the method private
                studentTotalScore = calculateTotalScoreFor.call(this, student);

                this._totalScores.push({
                    student: student,
                    totalScore: studentTotalScore
                });
            }
            return this;
        },
        getTopStudentsByExam: function (count) {

            return returnTopStudentsSortedBy.call(this, sortByExam, count);
        },
        getTopStudentsByTotalScore: function (count) {

            return returnTopStudentsSortedBy.call(this, sortByTotalScore, count);
        },
        testCourse: function () {
            return this._title;
        }
    }

    // other way to create methods
    //Course.prototype.addStudent = function (student) { };

    return Course;

    //return {
    //    Course: Course
    //}

}());