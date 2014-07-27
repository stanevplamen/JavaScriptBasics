var Calculator = (function () {

    var privateMember = 5;

    return {
        publicMember: function () {
            return privateMember;
        },
        change: function (newNumber) {
            privateMember = newNumber;
        },
        niki: 5
    }
});

var calc = new Calculator();
// extrended class
var ExtendedCalculator = (function (calc) {
    calc.mult = function (x, y) {
        calc.niki = x * y;
    }
    return calc;
});
var exCalc = new ExtendedCalculator(calc);

// singleton -> one instance
var singeltonObject = (function () {

    var variable = 'value';

    var testFinction = function (){

    }

    return {
        testFinction: testFinction
    }

}());

// new objects could be created
var newObject = (function () {

    var variable = 'value';

    var testFinction = function () {

    }

    return {
        testFinction: testFinction
    }

});

// namespaces
var Helpers = Helpers || {}; // declare if not existing
Helpers.Calculator = (function (eq) {

    var eqCtl = document.getElementById(eq);

    return {
        add: function (x,y) {
            var val = x + y;
            eqCtl.innerHTML = val;
        }
    };
}); // ()

var calculator = new Helpers.Calculator('eqId');
calculator.add(2, 3);

//var Calculator = (function (eq) {
//    var eqCtl = document.getElementById(eq);

//    return {
//        add: function (x, y) {
//            var val = x + y;
//            eqCtl.innerHTML = val;
//        }
//    };
//});

//var calculator = new Calculator('eq');
//calculator.add(2, 2);
