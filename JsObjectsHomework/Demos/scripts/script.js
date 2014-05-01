$(document).ready(function () {

    // 01 task

    $('#btnIsPlan').click(function () {
        var result = "\r\n";
        var x1 = parseFloat($('#txtIsPlanX1').val());
        var y1 = parseFloat($('#txtIsPlanY1').val());
        var x2 = parseFloat($('#txtIsPlanX2').val());
        var y2 = parseFloat($('#txtIsPlanY2').val());
        var x3 = parseFloat($('#txtIsPlanX3').val());
        var y3 = parseFloat($('#txtIsPlanY3').val());

        var a1 = new Point(x1, y1);
        var a2 = new Point(x2, y2);
        var a3 = new Point(x3, y3);

        var line1 = new LineSegment(a1, a2);
        var line2 = new LineSegment(a1, a3);
        var line3 = new LineSegment(a2, a3);

        result = result + (sprintf("Line element: %s, length: %f \r\n", line1, line1.getLength()));
        result = result + (sprintf("Line element: %s, length: %f \r\n", line2, line2.getLength()));
        result = result + (sprintf("Line element: %s, length: %f \r\n", line3, line3.getLength()));

        result = result + ("Are these lines forming a triangle? " + areFormTriangle(line1, line2, line3));

        $('#resIsPlan').text(result);
    });

    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.getDistance = function (p) {
            return Math.sqrt((this.x - p.x) * (this.x - p.x) + (this.y - p.y) * (this.y - p.y));
        };
        this.toString = function () {
            return sprintf("point(%f, %f)", this.x, this.y);
        };
        this.clone = function () {
            return new Point(this.x, this.y);
        }
    }

    function LineSegment(p1, p2) {
        this.start = p1.clone();
        this.end = p2.clone();
        this.getLength = function () {
            return this.start.getDistance(this.end);
        };
        this.toString = function () {
            return sprintf("line-segment(%s, %s)", this.start, this.end);
        };
    }

    function areFormTriangle(ls1, ls2, ls3) {
        var a = ls1.getLength();
        var b = ls2.getLength();
        var c = ls3.getLength();

        return a + b > c && a + c > b && b + c > a;
    }


    // 02 task

    $('#btnIsRem').click(function onCheckButtonClick() {

        var currentChars1 = ($('#txtIsRem1').val());
        var checkNumber = ($('#txtIsRem2').val());

        var elements = currentChars1.split(",");
        elements.remove(checkNumber);

        var result = elements.join(" | ");

        $('#resIsRem').text(result);
    });

    Array.prototype.remove = function (val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) {
                this.splice(i, 1);
            }
        }
    }

    // 03 task

    $('#btnIsDC').click(function () {
        var input = ($('#txtIsDC').val());

        var elements = input.split(",");
        var result = "";

        for (var i = 0; i < elements.length; i++) {
            elements[i] = jQuery.trim(elements[i]);
        }

        var arrCopy = deepCopy(elements);
        result = arrCopy.join(" | ");

        $('#resIsDC').text(result);
    });

    function deepCopy(obj) {
        if (Object.prototype.toString.call(obj) == '[object Array]') {
            var out = [], i = 0, len = obj.length;
            for (; i < len; i++) {
                out[i] = arguments.callee(obj[i]);
            }
            return out;
        }
        if (typeof obj == 'object') {
            var out = {}, i;
            for (i in obj) {
                out[i] = arguments.callee(obj[i]);
            }
            return out;
        }
        return obj;
    }


    // 04 task

    $('#btnIsProp').click(function () {
        var prop = ($('#txtIsProp').val());

        var obj = new Array();
        var result = "";

        if (hasProperty(obj, prop)) {
            result = (sprintf("%s - > true", prop));
        }
        else {
            result = (sprintf("%s - > false", prop));
        }
        $('#resIsProp').text(result);
    });

    function hasProperty(obj, prop) {
        if (obj.hasOwnProperty(prop)) {
            return true;
        }

        if (prop in obj) {
            return true;
        }

        return false;
    }

    // 05 task
    
    $('#btnIsPeo1').click(function () {
        var fname = ($('#txtIsPeo1').val());
        var lname = ($('#txtIsPeo2').val());
        var age = parseFloat($('#txtIsPeo3').val());

        var isInt = age % 1 === 0;

        if (isInt) {
            AddNewPerson(fname, lname, age);
        }
        
        var result = "";
        for (var i = 0; i < people.length; i++) {
            result = result + people[i].toString() + " | ";
        }

        $('#resIsPeo1').text(result);
    });

    function AddNewPerson(fname, lname, age) {
        people.push(new Person(fname, lname, age));
    }

    var people =
        [
           new Person("Parvan", "Panayotov", 38),
           new Person("Vtoran", "Zlatev", 22),
           new Person("Trichko", "Krastev", 33)
        ];

    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.toString = function () {
            return sprintf("%s %s (age %d)", this.firstName, this.lastName, this.age);
        }
    }

    // 05 yongest

    $('#btnIsPeo2').click(function () {

        var minAge = 100;
        var minAgeIndex = -1;

        for (var i = 0; i < people.length; i++) {
            if (people[i].age < minAge) {
                minAge = people[i].age;
                minAgeIndex = i;
            }
        }

        var result = people[minAgeIndex].toString();

        $('#resIsPeo2').text(result);
    });

    // 06 task

    $('#btnIsFN').click(function () {

        var e = document.getElementById("selIsFN");
        var groupProperty = e.options[e.selectedIndex].value;

        var groupedArr = group(people, groupProperty);

        var result = "";
        for (var entry in groupedArr) {
            result = result + (sprintf("Group '%s': %s", entry, groupedArr[entry]) + " | ");
        }

        $('#resIsFN').text(result);
    });

    function group(people, prop) {
        switch (prop) {
            case "firstName":
            case "lastName":
            case "age":
                {
                    var groups = {};

                    people.map(function (p) {
                        if (!groups[p[prop]])
                            groups[p[prop]] = new Array();
                        groups[p[prop]].push(p);
                    });

                    return groups;
                }
            default:
                throw new Error("No such property in Person.");
        }
    }
});