var Person = (function () {

    // function constructor
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }

    Person.prototype.birthday = function () {
        this._age++;
    };

    // get
    Person.prototype.getAge = function () {
        return this._age;
    };
    // set
    Person.prototype.setAge = function (value) {
        // validation
        this._age = value;
    };

    Person.prototype.tellName = function () {
        var output = 'Person: ' + this._name + this._age;
        return output;
    };

    return Person;

}());

var Student = (function () {

    // function constructor
    function Student(name, age, grade) {
        Person.call(this, name, age);
        this._grade = grade;
    }

    Student.prototype = new Person();
    Student.prototype.constructor = Student;

    Student.prototype.tellName = function () {
        var output = Person.prototype.tellName.call(this) + ' grade: ' + this._grade;
        return output;
    };

    return Student;

}());

var pe = new Person('Ivan', 17);
var st = new Student('Ivan', 17, 10);
var isInstanceStudent = (st instanceof Student); // true
var isInstancePerson = (st instanceof Person);  // true


var stp1 = pe.tellName();
var stp2 = st.tellName();
var t = 5;

for(var prop in st) {

    if (st.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

for (var prop in st) {

    if (Student.prototype.hasOwnProperty(prop)) {
        console.log(prop);
    }
}