define(function () {
    'use strict';
    var Section;
    Section = (function () {
        function Section(title) {
            this._title = title;
            this._items = []; // setting the array of items
        }

        Section.prototype = {
            add: function (item) {
                this._items.push(item); // add to the array of items
                return this;
            },
            getData: function () {
                var dataItems, i, len, item;
                dataItems = [];
                len = this._items.length;

                for (var i = 0; i < len; i++) {
                    item = this._items[i];
                    dataItems.push(item.getData());
                }

                return {
                    title: this._title,
                    items: dataItems     // returns the array            
                };
            }
        };

        return Section;
    }());
    return Section;
});