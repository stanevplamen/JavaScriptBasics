var Animal = function (options) {
    var name = options.name;
    var animal = {};

    animal.getName = function () {
        return name;
    };

    animal.speak = function () {
        console.log("Owww, my name is " + this.getName());
    };

    var somePrivateMethod = function () {

    };

    return animal;
};
