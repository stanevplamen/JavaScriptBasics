define(function() {
  'use strict';
  var Container;
  Container = (function () {

      // hidden data only accessible for container instances
      // can make private methods
      // cant make private variables

   function Container() {
       this._sections = [];
   }

   Container.prototype = {
       add: function (section) {
           this._sections.push(section);
           return this; // forms chaining
       },
       getData: function () {
           var i, section, dataSections, len;
           len = this._sections.length;
           dataSections = [];

           for (var i = 0; i < len; i++) {
               var section = this._sections[i];
               dataSections.push(section.getData());
           }

           return dataSections;
       }
   };

   return Container;
  }());
  return Container;
});