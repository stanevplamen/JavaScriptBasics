﻿// Define the Person constructor
function Person(firstName) {
    this.firstName = firstName;
}

// Add a couple of methods to Person.prototype
Person.prototype.walk = function () {
    console.log("I am walking!");
};
Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName);
};