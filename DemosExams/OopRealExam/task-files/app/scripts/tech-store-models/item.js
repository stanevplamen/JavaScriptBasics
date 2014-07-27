define([], function () {

    var Item = (function () {

        // hidden data 
        var typeVariations = ['accessory', 'smart-phone', 'notebook', 'pc', 'tablet'];

        // validation functions
        function validateInstanceOfType(type) {

            for (var a in typeVariations) {
                var chechedType = typeVariations[a];

                if (chechedType.toLowerCase() === type.toLowerCase()) {
                    return type;
                }
            }

            throw {
                message: ("The given item`s type is invalid. It could be only: 'accessory', 'smart-phone', 'notebook', 'pc', or 'tablet'")
            }
        }

        function validateName(name) {

            var nameLength = name.trim().length;

            if (nameLength >= 6 && nameLength <= 40 && typeof name == 'string') {
                return name;
            }
            else {
                throw {
                    message: ("The given item`s name should be between 6 and 40-characters-long")
                }
            }
        }

        function validatePrice(price) {

            function isNumber(price) {
                return !isNaN(parseFloat(price)) && isFinite(price);
            }

            var priceValidator = isNumber(price);

            if (isNumber) {
                return price;
            }
            else {
                throw {
                    message: ("The item`s price should be a decimal floating-point number")
                }
            }
        }
        // end validation functions
        // end hidden data

        // function constructor
        function Item(type, name, price) {

            // hiding the validation functions
            this.type = validateInstanceOfType.call(this, type); 
            this.name = validateName.call(this, name);
            this.price = validatePrice.call(this, price);
        }

        // public methods
        Item.prototype.validateType = function (type) {

            // hiding the validation functions
            return validateInstanceOfType.call(this, type);
        };
        // end public methods

        return Item;

    }());

    return Item;
});