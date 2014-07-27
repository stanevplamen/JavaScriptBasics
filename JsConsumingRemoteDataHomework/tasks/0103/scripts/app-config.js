(function () {

    require.config({
        paths: {
            jquery: "libs/jquery-2.0.3",
            httpRequester: "controls/http-requester",
            dataPersister: "controls/data-persister",
        }
    });

    require(['jquery', 'dataPersister'], function ($, datapersister) {

        /// students data extraction from file
        /// add students to server
        var studentsPromise = datapersister.getStudentsFromFile();

        studentsPromise.done(function () {

            var students = arguments[0];

            for (var a in students) {

                var studentItem = students[a];

                var newStudent = {
                    name: studentItem.fname,
                    grade: studentItem.age
                }
                
                var studentPostPromise = datapersister.postStudent(newStudent);

                studentPostPromise.done(function () {

                    var st = arguments[0];
                    newStudent.id = st.id;

                }).fail(function () {
                    throw {
                        message: ("Server add student database error!")
                    }
                })
            }


        }).fail(function () {
            throw {
                message: ("Students file database error!")
            }
        });

        /// get students from server
        /// delete the students
        var studentsPromiseServer = datapersister.getStudents();

        studentsPromiseServer.done(function () {

            var students = arguments[0].students;
            console.log("Students from the db");
            console.log(students);

            for (var a in students) {

                var studentId = students[a].id;
            
                var studentDeletePromise = datapersister.deleteStudent(studentId);

                studentDeletePromise.done(function () {

                    var st = arguments[0];
                    console.log("Try to delete student, result: " + st.message);

                }).fail(function () {
                    throw {
                        message: ("Server add student database error!")
                    }
                })
            }

        }).fail(function () {
            throw {
                message: ("Students server database error!")
            }
        });
    });   
})();