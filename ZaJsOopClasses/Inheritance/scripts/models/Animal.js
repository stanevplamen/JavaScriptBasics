function Animal() {

    this.currentType = "animal";
}; // This is the Animal *Type*

Animal.prototype.eat = function () {
    console.log("All animals can eat!");
};