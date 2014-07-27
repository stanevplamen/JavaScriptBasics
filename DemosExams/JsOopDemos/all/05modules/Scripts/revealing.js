var module = (function (someValue) {

    // Private
    var privateVar = someValue;

    // simulate properties set
    var secretVar = 5;

    // Public
    function change(newVar) {
        privateVar = newVar;
    }

    function publicVar() {
        return privateVar;
    }

    // simulate properties set for secretVar
    var setSecterVar = function (value) {
        if (secretVar === undefined) {
            secretVar = 0;
        }
        else {
            secretVar = value;
        }
        secretVar = value;
    }
    var getSecterVar = function () {
        return secretVar;
    }

    return {
        changeVar: change,
        publicVar: publicVar,
        setSecterVar: setSecterVar,
        getSecterVar : getSecterVar
    }

}('pesho')); // passing params to the singelton function


module.getSecterVar();
