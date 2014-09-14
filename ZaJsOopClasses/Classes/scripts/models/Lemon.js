function Lemon(type) {
    this.type = type;
    this.color = "yellow";
}

Lemon.prototype.getInfo = function () {
    return this.color + ' ' + this.type + ' lemon';
};

