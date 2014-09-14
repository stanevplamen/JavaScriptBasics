
window.onload = function () {

    var aBird = new Bird(); // Create an instance of the Bird Type
    aBird.eat(); // It should alert, so the inheritance worked
    aBird.fly(); // Important part of inheritance, Bird is also different to Animal
    console.log(aBird.currentNewType);

    var anAnimal = new Animal(); // Let's check an instance of Animal now
    anAnimal.eat(); // Alerts, no problem here
    console.log(anAnimal.currentType);
    //anAnimal.fly(); // Error will occur, since only Birds have fly() in its prototype

    // Example usage:
    var student1 = new Student("Janet", "Applied Physics");
    student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
    student1.walk();       // "I am walking!"
    student1.sayGoodBye(); // "Goodbye!"

    // Check that instanceof works correctly
    console.log(student1 instanceof Person);  // true 
    console.log(student1 instanceof Student); // true

    var course = new Course("Math", "No formula");
    console.log(course.testCourse());

    var courseIt = new ItCourse("It", "No formula");
    console.log(courseIt.testCourse());
}

