//1. Assign all the possible JavaScript literals to different variables.
//2. Create a string variable with quoted text in it. For example: 'How you doin'?', Joey said.
//3. Try typeof on all variables you created.
//4. Create null, undefined variables and try typeof on them.

// properties
var integerVar = 3;
var floatVar = 3.33;
var boolVar = true;
var stringVar = "Cookie gummies marshmallow jujubes. Gummies brownie carrot cake gummi bears cupcake. Oat cake dragée pie tootsie roll tart cotton candy jelly caramels macaroon. Fruitcake bear claw pie dessert fruitcake pie muffin.";
var quotedText1 = "'How you doin'?', Joey said.";
var quotedText2 = '"How you doin\'?", Joey said.';
var jsonCar = {
    company: 'BMW',
    type: 'X1',
    year: 2005
};
var nullVar = null;
var undefinedVar = undefined;

// make an array with all the values
var arrayVar = [integerVar, floatVar, boolVar, stringVar, quotedText1, quotedText2, jsonCar, nullVar, undefinedVar];
var functionVar = function () {
    // Display values

    // add the function to the presentation array
    arrayVar.push(functionVar);

    // display the items from the array
    for (var a in arrayVar) {
        
        var currentItem = arrayVar[a];
        var wrapper = document.getElementById('wrapper');
        wrapper.innerHTML += '<p>' + typeof currentItem + ' - ' + currentItem + '</p>'
    }
};

// call the function
functionVar();
