$(document).ready(function () {

    // 01 task

    $('#btnIsPri').click(function onCheckButtonClick() {

        var currentNumber = parseFloat($('#txtIsPri').val());
        var isInt = currentNumber % 1 === 0;
        var result = "";

        if (isInt && currentNumber > 0) {
            
            var output = "";
            for (var i = 1; i < currentNumber; i++) {
                output = output + i + ", "
            }
            result = output + currentNumber;
        }
        else {
            result = ("Please enter positive int number");
        }

        $('#resIsPri').text(result);
    });

    // 02 task

    $('#btnIsPri2').click(function onCheckButtonClick() {

        var currentNumber = parseFloat($('#txtIsPri2').val());
        var isInt = currentNumber % 1 === 0;
        var result = "";

        if (isInt && currentNumber > 0) {

            var sb = [];
            for (var i = 1; i < currentNumber; i++) {
                if (i % 3 == 0 && i % 7 == 0) {
                    continue;
                }
                else {
                    sb.push(" "+ i)
                }
            }
            result = sb.toString();
        }
        else {
            result = ("Please enter positive int number");
        }

        $('#resIsPri2').text(result);
    });


    // 03 task

    $('#btnIsFiv').click(function () {
        var input = ($('#txtIsFiv').val());

        var inputValues = input.split(",");
        var result = "";

        var numbers = new Array(inputValues.length);

        for (var i = 0; i < inputValues.length; i++) {
            numbers[i] = parseFloat(inputValues[i]);
        }

        var max = Number.MIN_VALUE;
        var min = Number.MAX_VALUE;

        for (var i = 0; i < inputValues.length; i++) {
            if (max < numbers[i]) {
                max = numbers[i];
            }
            if (min > numbers[i]) {
                min = numbers[i];
            }
        }
        result = (sprintf("The max number is %f.", max));
        result = result + "\r\n" + (sprintf("The min number is %f.", min));
        $('#resIsFiv').text(result);
    });

    // 04 task

    $('#btnIsSor').click(function () {
        var objects = [window, navigator, document];
        var sbResult = [];
        for (var o in objects) {
            var sb = [];
            for (var p in objects[o]) {
                sb.push(p);
            }
            sb.sort();
            sbResult.push(objects[o] + ": min " + sb[0] + " max: " + sb[sb.length - 1])
        }
        $('#resIsSor').text(sbResult.toString());
    });
});