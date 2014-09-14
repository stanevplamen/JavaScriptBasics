function Bird() {

    this.currentNewType = "bird";
}; // Declaring a Bird *Type*

// Inherit from Animal
Bird.prototype = new Animal(); // Birds inherit from Animal

// Correct the constructor pointer, because it points to Person
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function () {
    console.log("Birds are special, they can fly!");
};