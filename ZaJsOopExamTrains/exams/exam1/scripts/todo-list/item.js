define(function() {
  'use strict';
  var Item;
  Item = (function() {
    function Item(content) {
        this._content = content; // get the param in the constructor
    }

    Item.prototype = {
        getData: function () {
            return {
                content: this._content, // returns the param in the constructor 
            };
        }
    };
	
    return Item;
  })();
  return Item;
});