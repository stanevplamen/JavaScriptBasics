(function () {
    require(['courses/course', 'courses/itcourse', 'courses/student'],
    function (Course, ItCourse, Student) {

      var jsOopCourseTotalScoreFormula = function (student) {
        return 65 * student.exam / 100 +
          15 * student.homework / 5 +
          20 * student.attendance / 4 +
          0 * student.teamwork / 30 +
          5 * student.bonus / 10;
      };

      var jsOopCourse = new Course('JavaScript OOP', jsOopCourseTotalScoreFormula);

      //add students like this
      for (var i = 0; i < 30; i += 1) {
        var student = new Student({
          name: 'Peter Petrov',
          exam: Math.random() * 100,
          homework: Math.random() * 10,
          attendance: Math.random() * 10,
          teamwork: 0,
          bonus: Math.random() * 10
        });

        jsOopCourse.addStudent(student);
      }

      jsOopCourse.calculateResults();

      var topByExam = jsOopCourse
        .getTopStudentsByExam(5);

      var topByTotalScore = jsOopCourse
        .getTopStudentsByTotalScore(5);

      var t = 5;

      var jsOopCourseTotalScoreFormulaTwo = function (student) {
          return 65 * student.exam / 100 +
            15 * student.homework / 5 +
            20 * student.attendance / 4 +
            0 * student.teamwork / 30 +
            5 * student.bonus / 10;
      };

      var jsOopCourseIt = new ItCourse('JavaScript OOP', jsOopCourseTotalScoreFormulaTwo, 'C#');

        //add students like this
      for (var i = 0; i < 30; i += 1) {
          var student = new Student({
              name: 'Peter Petrov',
              exam: Math.random() * 100,
              homework: Math.random() * 10,
              attendance: Math.random() * 10,
              teamwork: 0,
              bonus: Math.random() * 10
          });

          jsOopCourseIt.addStudent(student);
      }

      jsOopCourseIt.calculateResults();

      var topByExam = jsOopCourseIt
        .getTopStudentsByExam(10);

      var topByTotalScore = jsOopCourseIt
        .getTopStudentsByTotalScore(10);

      var t = 5;
    });
}());

//http://blog.singuerinc.com/javascript/requirejs/2014/03/17/requirejs-and-javascript-inheritance/