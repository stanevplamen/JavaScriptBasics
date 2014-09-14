function Apple(type) {
    this.type = type;
    this.color = "red";

    // variant 1
    //this.getInfo = getAppleInfo;
    //function getAppleInfo() {
    //    return this.color + ' ' + this.type + ' apple';
    //}

    // variant 2
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}
