$(document).ready(function () {

    // 01 task

    $('#btnIsFiv').click(function () {
        var input = ($('#txtIsFiv').val());

        var inputlength = 20;

        var inputValues = input.split(",");
        var result = "";

        if (inputValues.length != inputlength) {
            result = (sprintf("Please enter %b real numbers separated with commas.", inputlength));
            return;
        }

        var numbers = new Array(inputlength);

        for (var i = 0; i < inputlength; i++) {
            numbers[i] = parseFloat(inputValues[i]);
        }

        var max = Number.MIN_VALUE;

        for (var i = 0; i < inputlength; i++) {
            numbers[i] = numbers[i] * 5;
        }
        result = (sprintf(numbers.join("|")));

        $('#resIsFiv').text(result);
    });

    // 02 task

    $('#btnIsChar').click(function onCheckButtonClick() {

        var currentChars1 = ($('#txtIsChar1').val());
        var currentChars2 = ($('#txtIsChar2').val());

        var inputChars01 = currentChars1.split(",");
        var inputChars02 = currentChars2.split(",");

        var result = "The arrays are equal";

        if (inputChars01.length == inputChars02.length) {

            for (var i = 0; i < inputChars01.length; i++) {
                if (inputChars01[i] === inputChars02[i]) {
                    continue;
                }
                else {
                    result = "The arrays are NOT equal";
                    break;
                }
            }
        }
        else {
            result = "The arrays are NOT equal";
        }

        $('#resIsChar').text(result);
    });


    // 03 task

    $('#btnIsEq').click(function () {
        var input = ($('#txtIsEq').val());

        var elements = input.split(",");
        var result = "";

        var size = elements.length;
        var currentLength = 1;
        var startIndex = 0;
        var length = 1;
        var start = 0;

        for (var i = 1; i < size; i++) {
            if (elements[i] === elements[i - 1]) {
                currentLength++;
            }

            if (elements[i] !== elements[i - 1] || i === size - 1) {
                if (length < currentLength) {
                    length = currentLength;
                    start = startIndex;
                }

                if (i < size - 1) {
                    startIndex = i;
                    currentLength = 1;
                }
            }
        }

        if (start == 1) {
            length++;
            start--;
        }

        result = "{ ";
        for (var i = start; i <= start + length - 1; i++) {
            result = result + elements[i] + ", ";
        }
        result = result.substring(0, result.length - 2)
        result = result + " }";

        $('#resIsEq').text(result);
    });

    // 04 task

    $('#btnIsInr').click(function () {
        var input = ($('#txtIsInr').val());

        var elements = input.split(",");

        for (var i = 0; i < elements.length; i++) {
            elements[i] = jQuery.trim(elements[i]);
        }

        var result = "";

        var size = elements.length;
        var currentLength = 1;
        var startIndex = 0;
        var length = 1;
        var start = 0;

        for (var i = 1; i < size; i++) {
            if (elements[i] > elements[i - 1]) {
                currentLength++;
            }

            if (elements[i] <= elements[i - 1] || i === size - 1) {
                if (length < currentLength) {
                    length = currentLength;
                    start = startIndex;
                }

                if (i < size - 1) {
                    startIndex = i;
                    currentLength = 1;
                }
            }
        }

        if (start == 1 && elements[0] < elements[1]) {
            length++;
            start--;
        }

        result = "{ ";
        for (var i = start; i <= start + length - 1; i++) {
            result = result + elements[i] + ", ";
        }
        result = result.substring(0, result.length - 2)
        result = result + " }";

        $('#resIsInr').text(result);
    });

    // 05 task
    
    $('#btnIsSor').click(function () {
        var input = ($('#txtIsSor').val());

        var elements = input.split(",");

        for (var i = 0; i < elements.length; i++) {
            elements[i] = jQuery.trim(elements[i]);
        }

        var result = "";

        var i = 0;
        var j = 0;
        var min = 0;
        var temp = 0;

        for (i = 0; i < elements.length - 1; i++) {
            min = i;

            for (j = i + 1; j < elements.length; j++) {
                if (parseInt(elements[j]) < parseInt(elements[min])) {
                    min = j;
                }
            }

            temp = parseInt(elements[i]);
            elements[i] = parseInt(elements[min]);
            elements[min] = temp;
        }
        result = (sprintf(elements.join("|")));
        $('#resIsSor').text(result);
    });

    // 06 task

    $('#btnIsFN').click(function () {
        var input = ($('#txtIsFN').val());

        var elements = input.split(",");

        for (var i = 0; i < elements.length; i++) {
            elements[i] = jQuery.trim(elements[i]);
        }

        var dict = [];
        for (var i = 0; i < elements.length; i++) {
            if (dict[elements[i]] == undefined)
                dict[elements[i]] = 1;
            else
                dict[elements[i]]++;
        }
      
        var maxNumb = 0;
        var maxIndex = 0;

        for (var arr in dict) {
            if (maxNumb == 0) {
                maxNumb = parseInt(dict[arr]);
                maxIndex = arr;
            }
            if (maxNumb < parseInt(dict[arr])) {
                maxNumb = parseInt(dict[arr]);
                maxIndex = arr;
            }
        }

        var result = (maxIndex + "-" + maxNumb + "times");
        $('#resIsFN').text(result);
    });

    // 07 task

    $('#btnIsBsA').click(function () {
        var elements = $('#txtIsBsA1').val().split(',');
        var searched = $('#txtIsBsA2').val();
        for (var i = 0; i < elements.length; i++) {
            elements[i] = jQuery.trim(elements[i]);
        }
        searched = jQuery.trim(searched);

        elements.sort();
        var result = elements.binarySearch(searched)

        $('#resIsBsA').text(result);
        document.getElementById('txtIsBsA1').value = elements.join(", ");
    });

    Array.prototype.binarySearch = function (searchElement) {

        var minIndex = 0;
        var maxIndex = this.length - 1;
        var currentIndex;
        var currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = this[currentIndex];

            if (currentElement < searchElement) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > searchElement) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }

        return -1;
    };

});