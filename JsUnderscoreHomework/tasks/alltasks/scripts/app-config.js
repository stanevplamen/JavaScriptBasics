(function () {

    require.config({
        paths: {
            jquery: "libs/jquery-2.0.3",
            underscore: 'libs/underscore-min',
            httpRequester: "controls/http-requester",
            dataPersister: "controls/data-persister",
        }
    });

    require(['underscore', 'jquery', 'dataPersister'], function (_, $, datapersister) {

        /// students data extraction
        var studentsPromise = datapersister.getStudents();

        studentsPromise.done(function () {

            var students = arguments[0];            for (var a in students) {
                var studentItem = students[a];

                studentItem.getFullName = function () {
                    return (studentItem.fname + ' ' + studentItem.sname);
                }

                studentItem.getAverageMark = function () {

                    return _.chain(studentItem.marks).map(function (m) {
                        return m.value;
                    }).value().reduce(function (a, b) {
                        return a + b;
                    }) / this.marks.length;
                }
            }            executeTastOne(students);
            executeTaskTwo(students);
            executeTaskThree(students);            executeTaskSeven(students);
        }).fail(function () {
            throw {
                message: ("Students database error!")
            }
        });

        /// animals data extraction
        var animalsPromise = datapersister.getAnimals();

        animalsPromise.done(function () {

            var animals = arguments[0];            executeTaskFour(animals);
            executeTaskFive(animals);
        }).fail(function () {
            throw {
                message: ("Animals database error!")
            }
        })

        /// books data extraction
        var booksPromise = datapersister.getBooks();

        booksPromise.done(function () {

            var books = arguments[0];            executeTaskSix(books);
        }).fail(function () {
            throw {
                message: ("Books database error!")
            }
        })

    });


    function executeTastOne(students) {
        var sortedFilteredStudents = _.chain(students)
            .filter(function (s) {
                return s.fname.localeCompare(s.sname) < 0;
            })
            .sortBy(function (s) {
                return (s.getFullName());
            })
            .value().reverse();

        console.log(sortedFilteredStudents);
    }

    function executeTaskTwo(students) {

        var filteredStudents = _.chain(students)
           .filter(function (s) {
               return 18 <= s.age && s.age <= 24;
           })
           .map(function (s) {
               return (s.getFullName());
           })
           .value();

        console.log(filteredStudents);
    }

    function executeTaskThree(students) {

        var bestStudent = _.max(students, function (s) {
            return s.getAverageMark();
        });

        console.log(bestStudent);
    }

    function executeTaskFour(animals) {

        var groupedBySpecies = _.groupBy(animals, "type");
        _.each(groupedBySpecies, function (group, key) {
            var groupSorted = _.sortBy(group, "legs");
        });

        console.log(groupedBySpecies);
    }

    function executeTaskFive(animals) {

        var legsTotal = _.chain(animals).pluck("legs").reduce(function (a, b) {
            return a + b;
        }).value();

        console.log(legsTotal);
    }

    function executeTaskSix(books) {

        var maxBooksAuthor = _.max(_.groupBy(books, "author"), function (books) {
            return books.length;
        });

        console.log(maxBooksAuthor);
    }

    function executeTaskSeven(students) {

        var mostCommonFirstName = _.max(_.groupBy(students, "firstName"), function (students) {
            return students.length;
        });
        console.log(mostCommonFirstName[0].fname + ": " + mostCommonFirstName.length + " times");

        var mostCommonLastName = _.max(_.groupBy(students, "lastName"), function (students) {
            return students.length;
        });
        console.log(mostCommonLastName[0].sname + ": " + mostCommonLastName.length + " times");
    }

})();