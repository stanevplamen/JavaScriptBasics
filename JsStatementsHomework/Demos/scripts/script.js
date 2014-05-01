$(document).ready(function () {

    // 01 task

    $('#btnIsBig').click(function onCheckButtonClick() {

        var currentNumber1 = parseFloat($('#txtIsBig1').val());
        var currentNumber2 = parseFloat($('#txtIsBig2').val());

        var currentNumber = currentNumber1 * currentNumber2;
        var result = "";

        if (!isNaN(currentNumber)) {
            if (currentNumber1 > currentNumber2) {
                result = (sprintf("%f is bigger than %f. Values exchanged", currentNumber1, currentNumber2));
                currentNumber = currentNumber2;
                currentNumber2 = currentNumber1;
                currentNumber1 = currentNumber;
            }
            else if (currentNumber1 == currentNumber2) {
                result = (sprintf("%f is equal to %f.", currentNumber1, currentNumber2));
            }
            else {
                result = (sprintf("%f is bigger than %f.", currentNumber2, currentNumber1));
            }
        }
        else {
            result = ("The input is not correct");
        }

        $('#resIsBig').text(result);
    });

    // 02 task

    $('#btnIsSign').click(function onCheckButtonClick() {

        var currentNumber1 = parseFloat($('#txtIsSign1').val());
        var currentNumber2 = parseFloat($('#txtIsSign2').val());

        var result = "";

        if (!isNaN(currentNumber1) && !isNaN(currentNumber2)) {
            if (currentNumber1 == 0 || currentNumber2 == 0) {
                result = ("The product does not has sign");
            }
            else if (currentNumber1 > 0 && currentNumber2 < 0 || currentNumber1 < 0 && currentNumber2 > 0) {
                result = ("The product sign is minus");
            }
            else {
                result = ("The product sign is plus");
            }
        }
        else {
            result = ("The input is not correct");
        }

        $('#resIsSign').text(result);
    });


    // 03 task

    $('#btnIsBigN').click(function onCheckButtonClick() {

        var currentBig1 = parseFloat($('#txtIsBigN1').val());
        var currentBig2 = parseFloat($('#txtIsBigN2').val());
        var currentBig3 = parseFloat($('#txtIsBigN3').val());

        var testNumbers = currentBig1 * currentBig2 * currentBig3;
        var result = "";

        if (isNaN(testNumbers) == false) {
            if (currentBig1 >= currentBig2 && currentBig1 >= currentBig3) {
                result = (sprintf("The biggest number is %f.", currentBig1));
            }
            else if (currentBig2 >= currentBig1 && currentBig2 >= currentBig3) {
                result = (sprintf("The biggest number is %f.", ccurrentBig2));
            }
            else {
                result = (sprintf("The biggest number is %f.", currentBig3));
            }
        }
        else {
            result = ("The biggest number could not be calculated due to invalid input");
        }

        $('#resIsBigN').text(result);
    });

    // 04 task

    $('#btnIsSor').click(function onCheckButtonClick() {

        var a = parseFloat($('#txtIsSor1').val());
        var b = parseFloat($('#txtIsSor2').val());
        var c = parseFloat($('#txtIsSor3').val());

        var currentNumber = a * b * c;

        var isInt = currentNumber % 1 === 0;
        var result = "";

        if (!isNaN(currentNumber)) {

            var intResult = currentNumber.toString();
            if (intResult.length >= 3) {
                if (a >= b) {
                    if (b >= c) {
                        result = (sprintf("%f %f %f", a, b, c));
                    }
                    else if (a >= c) {
                        result = (sprintf("%f %f %f", a, c, b));
                    }
                    else {
                        result = (sprintf("%f %f %f", c, a, b));
                    }
                }
                else if (b >= c) {
                    if (a >= c) {
                        result = (sprintf("%f %f %f", b, a, c));
                    }
                    else {
                        result = (sprintf("%f %f %f", b, c, a));
                    }
                }
                else {
                    result = (sprintf("%f %f %f", c, b, a));
                }
            }
        }
        else {
            result = ("The input is not correct");
        }
       
        $('#resIsSor').text(result);
    });

    // 05 task
    
    $('#btnIsDig').click(function () {
        var source = parseInt($('#txtIsDig').val());
        var result;
        switch (source) {
            case 0:
                result = "Zero";
                break;
            case 1:
                result = "One";
                break;
            case 2:
                result = "Two";
                break;
            case 3:
                result = "Three";
                break;
            case 4:
                result = "Four";
                break;
            case 5:
                result = "Five";
                break;
            case 6:
                result = "Six";
                break;
            case 7:
                result = "Seven";
                break;
            case 8:
                result = "Eight";
                break;
            case 9:
                result = "Nine";
                break;
            default:
                result = "Ivnalid input!";
                break;
        }
        $('#resIsDig').text(result);
    });

    // 06 task

    $('#btnIsEq').click(function onCheckButtonClick() {

        var a = parseFloat($('#txtIsEq1').val());
        var b = parseFloat($('#txtIsEq2').val());
        var c = parseFloat($('#txtIsEq3').val());

        var currentNumber = a * b * c;

        var isInt = currentNumber % 1 === 0;
        var result = "";

        if (!isNaN(currentNumber)) {

            var insideSquareRoot = (b * b) - 4 * a * c;
            if (insideSquareRoot < 0) {
                result = "No Solution";
            }
            else {
                var sqrt = Math.sqrt(insideSquareRoot);
                var x1 = (-b + sqrt) / (2 * a);
                var x2 = (-b - sqrt) / (2 * a);
                if (x1 == x2)
                    result = (sprintf("One solution: %f", x1));
                else
                    result = (sprintf("2 Solutions: %f and %f",  x1, x2));
            }
        }
        else {
            result = ("The input is not correct");
        }

        $('#resIsEq').text(result);
    });


    // 07 task

    $('#btnIsFiv').click(function () {
        var input = ($('#txtIsFiv').val());

        var inputValues = input.split(",");
        var result = "";

        if (inputValues.length != 5) {
            result = ("Please enter 5 real numbers separated with commas.");
            return;
        }

        var numbers = new Array(5);

        for (var i = 0; i < 5; i++) {
            numbers[i] = parseFloat(inputValues[i]);
        }

        var max = Number.MIN_VALUE;

        for (var i = 0; i < 5; i++) {
            if (max < numbers[i]) {
                max = numbers[i];
            }
        }
        result = (sprintf("The greatest number is %f.", max));

        $('#resIsFiv').text(result);
    });

    // 08 task

    $('#btnIsNtoT').click(function () {
        var input = parseFloat($('#txtIsNtoT').val());
        var isInt = input % 1 === 0;
        var result = "";

        if (!isInt || input < 0) {
            result = ("Enter a valid integer greater than or equal to zero.");
        }
        else {
            var numberAsWord = convertToWord(input);
            result = (("The number entered is: " + numberAsWord));
        }

        $('#resIsNtoT').text(result);
    });

    var ones =
        [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine"
        ];

    var teens =
    [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    var tens =
    [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    // US Numbering:
    var thousands =
    [
        "",
        "thousand",
        "million",
        "billion",
        "trillion",
        "quadrillion",
        "quintillion"
    ];

    function convertToWord(number) {

        var temp;
        var showThousands = false;
        var allZeros = true;

        // Used to build result
        var builder = new String();
        // Convert value to string
        var digits = new String(number);

        // Traverse characters in reverse order
        for (var i = digits.length - 1; i >= 0; i--) {

            var digit = parseInt(digits[i]);
            var column = (digits.length - (i + 1));

            temp = "";

            // Determine if ones, tens, or hundreds column
            switch (column % 3) {
                case 0:        // Ones position
                    showThousands = true;
                    if (i == 0) {
                        // First digit in number (last in loop)
                        temp = ones[digit] + " ";
                    }
                    else if (digits[i - 1] == '1') {
                        if (i - 1 > 0 && column == 0) {
                            temp = "and ";
                        }
                        // This digit is part of "teen" value
                        temp += teens[digit] + " ";
                        // Skip tens position
                        i--;
                    }
                    else if (digit != 0) {
                        // Any non-zero digit
                        if (digits[i - 1] == '0' && column == 0) {
                            temp = "and ";
                        }
                        temp += ones[digit] + " ";
                    }
                    else {
                        // This digit is zero. If digit in tens and hundreds
                        // column are also zero, don't show "thousands"
                        // Test for non-zero digit in this grouping
                        if (digits[i - 1] != '0' || (i > 1 && digits[i - 2] != '0'))
                            showThousands = true;
                        else
                            showThousands = false;
                    }

                    // Show "thousands" if non-zero in grouping
                    if (showThousands) {
                        if (column > 0) {
                            temp += thousands[Math.floor(column / 3)];
                            if (allZeros) {
                                temp += " ";
                            }
                            else {
                                temp += ", ";
                            }
                        }
                        // Indicate non-zero digit encountered
                        allZeros = false;
                    }
                    builder = temp + builder;
                    break;

                case 1:        // Tens column
                    if (digit > 0) {
                        temp = tens[digit];
                        if (digits[i + 1] != '0') {
                            temp += "-";
                        }
                        else {
                            temp += " ";
                        }
                        builder = temp + builder;
                    }
                    break;

                case 2:        // Hundreds column
                    if (digit > 0) {
                        temp = ones[digit] + " hundred ";
                        builder = temp + builder;
                    }
                    break;
            }
        }

        builder = builder.replace(", and", " and");
        // Capitalize first letter
        return builder[0].toUpperCase() + builder.substr(1, builder.length - 1);
    }
});