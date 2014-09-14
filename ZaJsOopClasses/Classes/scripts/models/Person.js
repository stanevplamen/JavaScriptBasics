// Define a class like this
function Person(name, gender) {

    // Add object properties like this
    this.name = name;
    this.gender = gender;
}

// Add methods like this.  All Person objects will be able to invoke this
Person.prototype.speak = function () {
    console.log("Howdy, my name is " + this.name);
}
