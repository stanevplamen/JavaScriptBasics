define(['tech-store-models/item'], function (Item) {

    var Store = (function () {

        // validation functions

        function validateName(name) {

            var nameLength = name.trim().length;

            if (nameLength >= 6 && nameLength <= 30 && typeof name == 'string') {
                return name;
            }
            else {
                throw {
                    message: ("The given store`s name should be between 6 and 30-characters-long")
                }
            }
        }

        function validatePriceNumber(price) {

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

        function sortByFunction(prop) {
            return function (a, b) { return a[prop].localeCompare(b[prop]); };
        }

        function sortByNumbers(prop) {
            return function (a, b) { return (a[prop] - b[prop]); };
        }

        // end hidden data

        // function constructor
        function Store(name) {

            this._items = [];
            // hiding the validation functions
            this._name = validateName.call(this, name);
        }

        // public methods
        Store.prototype.addItem = function (item) {
            if (!(item instanceof Item)) {
                throw {
                    message: 'Trying to add an objects that is not an instance of Item'
                }
            }
            this._items.push(item);
            // returting the same function to allow chaining
            return this;
        };

        Store.prototype.getAll = function () {

            return this._items.sort(sortByFunction('name'));
        };

        Store.prototype.getSmartPhones = function () {

            var smartPhones = [];

            for (var a in this._items) {
                var item = this._items[a];
                if (item.type === 'smart-phone') {
                    smartPhones.push(item);
                }
            }

            return smartPhones.sort(sortByFunction('name'));
        };

        Store.prototype.getMobiles = function () {

            var mobiles = [];

            for (var a in this._items) {
                var item = this._items[a];
                if (item.type === 'smart-phone' || item.type === 'tablet') {
                    mobiles.push(item);
                }
            }

            return mobiles.sort(sortByFunction('name'));
        };

        Store.prototype.getComputers = function () {

            var computers = [];

            for (var a in this._items) {
                var item = this._items[a];
                if (item.type === 'notebook' || item.type === 'pc') {
                    computers.push(item);
                }
            }

            return computers.sort(sortByFunction('name'));
        };

        Store.prototype.filterItemsByType = function (filterType) {
         
            var filteredItems = [];

            for (var a in this._items) {
                var item = this._items[a];
                filterType = item.validateType(filterType);

                if (item.type === filterType) {
                    filteredItems.push(item);
                }
            }

            return filteredItems.sort(sortByFunction('name'));
        };

        Store.prototype.filterItemsByPrice = function (options) {

            var minValue, maxValue;

            if (options && options.min) {
                minValue = validatePriceNumber(options.min);
            }
            else {
                minValue = 0;
            }

            if (options && options.max) {
                maxValue = validatePriceNumber(options.max);
            }
            else {
                maxValue = Number.MAX_VALUE;
            }
     
            var filteredItemsByPrice = [];

            for (var a in this._items) {
                var item = this._items[a];
                if (item.price >= minValue && item.price <= maxValue) {
                    filteredItemsByPrice.push(item);
                }
            }
            
            return filteredItemsByPrice.sort(sortByNumbers('price'));
        };

        Store.prototype.countItemsByType = function () {

            var itemsTypes = {};

            for (var a in this._items) {
                var item = this._items[a];
                var itemType = item.type;

                if (!itemsTypes[itemType]) {
                    itemsTypes[itemType] = 1;
                }
                else {
                    itemsTypes[itemType] += 1;
                }
            }

            return itemsTypes;
        };

        Store.prototype.filterItemsByName = function (partOfName) {

            var filteredItemsByName = [];
            partOfName = partOfName.toLowerCase();

            for (var a in this._items) {
                var item = this._items[a];
                var itemName = item.name.toLowerCase();
                var nameExists = (itemName.indexOf(partOfName) > -1);

                if (nameExists) {
                    filteredItemsByName.push(item);
                }
            }

            return filteredItemsByName.sort(sortByFunction('name'));
        };

        // end public methods

        return Store;

    }());

    return Store;
});

