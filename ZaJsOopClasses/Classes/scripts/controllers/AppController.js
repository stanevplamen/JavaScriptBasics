
window.onload = function () {

    var apple = new Apple('macintosh');
    apple.color = "reddish";
    console.log(apple.getInfo());

    var lemon = new Lemon('Greek');
    lemon.color = "cyan";
    console.log(lemon.getInfo());

    orange.color = "new-orange";
    console.log(orange.getInfo());

    // Instantiate new objects with 'new'
    var person = new Person("Bob", "M");

    // Invoke methods like this
    person.speak(); // alerts "Howdy, my name is Bob"

    var cat = Animal({ name: 'Tiger' });
    cat.speak();

    var product = new Product("fruit");
    product.type = "apple";
    console.log(product.type); //logs "fruit: apple"
    console.log(product.type = "orange");  //logs "orange"
    console.log(product.type); //logs "fruit: orange"

    var course = new Course("Math", "No formula");
    console.log(course.testCourse());

}


