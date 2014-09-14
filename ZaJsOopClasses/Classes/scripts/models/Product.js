/**
 * @param {string} prefix
 * @constructor
 */
function Product(prefix) {
    /**
     * @private
     * @type {number}
     */
    this.prefix_ = prefix;
    /**
     * @private
     * @type {string}
     */
    this.type_ = "";
}

/**
 * @param {string} newType
 */
Product.prototype = {
    /**
     * @return {string}
     */
    get type() {
        return this.prefix_ + ": " + this.type_;
    },
    /**
     * @param {string}
     */
    set type(newType) {
        this.type_ = newType;
    }
};

///**
// * @param {string} newType
// */
//Object.defineProperty(Product.prototype, "type", {
//    /**
//     * @return {string}
//       */
//    get: function () {
//        return this.prefix_ + ": " + this.type_;
//    },
//    /**
//     * @param {string}
//    */
//    set: function (newType) {
//        this.type_ = newType;
//    }
//});