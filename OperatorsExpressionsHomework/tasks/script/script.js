$(document).ready(function () {

    // 01 task

    $('#btnIsOdd').click(function onCheckButtonClick() {

        var currentNumber = parseFloat($('#txtIsOdd').val());

        var isInt = currentNumber % 1 === 0;
        var isEven = currentNumber % 2 === 0;
        var result = "";

        if (isInt) {
            if (isEven) {
                result = ("The number is even.");
            }
            else {
                result = ("The number is odd.");
            }
        }
        else {
            result = ("Enter an integer number");
        }

        $('#resIsOdd').text(result);
    });

    // 02 task

    $('#btnIsCom').click(function onCheckButtonClick() {

        var currentNumber = parseFloat($('#txtIsCom').val());

        var isInt = currentNumber % 1 === 0;
        var isCommon = (currentNumber % 5 === 0 && currentNumber % 7 === 0);
        var result = "";

        if (isInt) {
            if (isCommon) {
                result = ("The number is common divisor of 5 and 7.");
            }
            else {
                result = ("The number is NOT common divisor of 5 and 7");
            }
        }
        else {
            result = ("Enter an integer number");
        }

        $('#resIsCom').text(result);
    });


    // 03 task

    $('#btnIsRec').click(function onCheckButtonClick() {

        var currentHeigth = parseFloat($('#txtIsRecH').val());
        var currentWidth = parseFloat($('#txtIsRecB').val());

        var recArea = currentHeigth * currentWidth;
        var result = "";

        if (isNaN(recArea) == false) {
            result = ("The area of the rectangle is: " + recArea);
        }
        else {
            result = ("The area could not be calculated due to invalid input");
        }

        $('#resIsRec').text(result);
    });

    // 04 task

    $('#btnIs3Bit').click(function onCheckButtonClick() {

        var currentNumber = parseFloat($('#txtIs3Bit').val());
        var isInt = currentNumber % 1 === 0;
        var result = "";

        if (isInt) {

            var intResult = currentNumber.toString();
            if (intResult.length >= 3) {
                if (intResult.split('').reverse()[2] == 7) {
                    result = ("The third digit is seven");
                }
                else {
                    result = ("The third digit is NOT seven");
                }
            }
        }
        else {
            result = ("Enter an integer number");
        }

        $('#resIs3Bit').text(result);
    });


    // 05 task

    $('#btnIs3Index').click(function onCheckButtonClick() {

        var currentNumber = parseFloat($('#txtIs3Index').val());
        var isInt = currentNumber % 1 === 0;
        var result = "";

        if (isInt) {

            var binResult = Number(currentNumber).toString(2);
            if (binResult.split('').reverse()[2] == 1) {
                result = ("The third bit is 1");
            }
            else {
                result = ("The third bit is 0");
            }           
        }
        else {
            result = ("Enter an integer number");
        }

        $('#resIs3Index').text(result);
    });

    // 06 task

    $('#btnInCircle').click(function onCheckButtonClick() {

        var x = parseFloat($('#txtInCircle1').val());
        var y = parseFloat($('#txtInCircle2').val());

        var check = x * y;
        var r = 5;

        var result = "";

        if (isNaN(check) == false) {

            if ((x * x + y * y) <= (r * r)) {
                result = ("The point is within the circle 0,5");
            }
            else {
                result = ("The point is NOT within the circle 0,5");
            }
        }
        else {
            result = ("Enter numbers for coordinates");
        }

        $('#resInCircle').text(result);
    });

    // 07 task

    $('#btnIsPrime').click(function onCheckButtonClick() {

        var currentNumber = parseFloat($('#txtIsPrime').val());
        var isInt = currentNumber % 1 === 0;
        var result = "";

        if (isInt) {

            var isPrime = checkForPrime(currentNumber);

            if (isPrime) {
                result = ("The number is prime.");
            }
            else {
                result = ("The number  is not prime.");
            }
        }
        else {
            result = ("Enter an integer number");
        }

        $('#resIsPrime').text(result);

        function checkForPrime(currentNumber) {
            var isPrime = true;
            for (var i = 2; i < Math.sqrt(currentNumber) + 1; i++) {
                if (currentNumber % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            return isPrime;
        }
    });

    // 08 task

    $('#btnInTrap').click(function onCheckButtonClick() {

        var currentA = parseFloat($('#txtInTrap1').val());
        var currentB = parseFloat($('#txtInTrap2').val());
        var currentHeigth = parseFloat($('#txtInTrap3').val());

        var trapArea = currentHeigth * currentB * currentA / 2;

        var result = "";

        if (isNaN(trapArea) == false) {

            result = ("The area of the trapezoid is " + trapArea + " cm2");
        }
        else {
            result = ("The area could not be calculated due to invalid input");
        }

        $('#resInTrap').text(result);
    });


    // 09 task

    $('#btnCircle').click(function onCheckButtonClick() {

        var x = parseFloat($('#txtCircle1').val());
        var y = parseFloat($('#txtCircle2').val());

        var check = x * y;
        var r = 3;

        var result = "";

        if (isNaN(check) == false) {

            var inCircle = checkInCircle(x, y);
            var inRectangle = checkInRectangle(x, y);

            if (checkInCircle && checkInRectangle) {
                result = ("The point is within the circle and the rectangle");
            }
            else {
                result = ("The point is NOT within the circle and rectangle");
            }

        }
        else {
            result = ("Enter numbers for coordinates");
        }

        $('#resCircle').text(result);

        function checkInCircle(x, y) {
            if (((x + 1) * (x + 1) + (y + 1) * (y + 1)) <= (r * r)) {
                return true;
            }
            return false;
        }

        function checkInRectangle(x, y) {
            if (y <= 1 && y >= -1 && x <= 5 && x >= -1) {
                return true;
            }
            return false;
        }
    });
});