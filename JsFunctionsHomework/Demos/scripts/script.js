$(document).ready(function () {

    // 01 task

    $('#btnIsLas').click(function () {
        var currentNumber = parseFloat($('#txtIsLas').val());

        var isInt = currentNumber % 1 === 0;
        var result = "";

        if (isInt) {
            var lastDigit = currentNumber % 10;
            result = convertDigitTotext(lastDigit);
        }
        else {
            result = ("Please enter a valid integer");
        }

        $('#resIsLas').text(result);
    });

    function convertDigitTotext(lastDigit) {
        var digitName;
        switch (lastDigit) {
            case 0:
                digitName = "Zero"; break;
            case 1:
                digitName = "One"; break;
            case 2:
                digitName = "Two"; break;
            case 3:
                digitName = "Three"; break;
            case 4:
                digitName = "Four"; break;
            case 5:
                digitName = "Five"; break;
            case 6:
                digitName = "Six"; break;
            case 7:
                digitName = "Seven"; break;
            case 8:
                digitName = "Eight"; break;
            case 9:
                digitName = "Nine"; break;
            default:
                digitName = "No such digit";
        }

        return digitName;
    }

    // 02 task

    $('#btnIsRev').click(function onCheckButtonClick() {

        var currentNumber = parseFloat($('#txtIsRev').val());
        var isInt = currentNumber % 1 === 0;
        var result = "";

        if (isInt) {
            result = reverseDigits(currentNumber);
        }
        else {
            result = ("Please enter a valid integer");
        }

        $('#resIsRev').text(result);
    });

    function reverseDigits(currentNumber) {
       
        var curStr = currentNumber.toString(); 
        var sRev = curStr.split('');
        sRev.reverse();

        return parseInt(sRev.join(''));
    }

    // 03 task

    $('#btnIsTxt').click(function () {
        var word = ($('#txtIsTxt1').val());

        var allText = demotext;

        var result = [];

        //result.push("CaseSensitive: " + SearchInText(source, word));
        result.push(SearchInText(allText, word, true));

        $('#resIsTxt').text("Found:" + result.toString());
    });

    function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        var allText = "";
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    allText = rawFile.responseText;
                    document.getElementById('txtIsTxt').value = "File loaded";
                    //alert(allText);
                    return allText;                   
                }
            }
        }
        document.getElementById('txtIsTxt').value = "File loaded with exception";
        alert("Exception reading text file occured");
        return ("Exception case: Just jUSt jusTs ");
    }

    function SearchInText(allText, word, isCaseSensitive) {
        var re = new RegExp('\\b' + word + '\\b', "g");
        if (isCaseSensitive === true)
            re = new RegExp('\\b' + word + '\\b', "gi");
        return allText.match(re);
    }

    // 04 task

    $('#btnIsDiv').click(function () {
        var tagName = "div";
        result = "";

        var elementsCount = getElementsCount(tagName);
        
        result = (sprintf("The html page contains %d '%s' elements.", elementsCount, tagName));

        $('#resIsDiv').text(result);
    });

    function getElementsCount(tagName) {
        var nodes = document.getElementsByTagName(tagName);
        return nodes.length;
    }

    // 05 task
    
    $('#btnIsSor').click(function () {
        var input = ($('#txtIsSor').val());
        var number = parseFloat($('#txtIsSor1').val());

        var elements = input.split(",");

        for (var i = 0; i < elements.length; i++) {
            elements[i] = parseFloat(jQuery.trim(elements[i]));
        }

        var result = "";

        var dict = [];
        for (var i = 0; i < elements.length; i++) {
            if (dict[elements[i]] == undefined)
                dict[elements[i]] = 1;
            else
                dict[elements[i]]++;
        }

        var curTimes= 0;
        var curNumb = 0;

        for (var arr in dict) {
            
            curNumb = arr;

            if (curNumb == number) {
                curTimes = parseInt(dict[arr]);
                break;
            }
        }
        result = (sprintf("The nuber %f is %f times in the given array.", number, curTimes));
        $('#resIsSor').text(result);
    });

    // 05 test


    $('#btnIsTes').click(function () {
        var input = ($('#txtIsSor').val());
        var number = parseFloat($('#txtIsTes1').val());
        var testTimes = parseFloat($('#txtIsTes2').val());

        var elements = input.split(",");

        for (var i = 0; i < elements.length; i++) {
            elements[i] = parseFloat(jQuery.trim(elements[i]));
        }

        var result = "";

        var dict = [];
        for (var i = 0; i < elements.length; i++) {
            if (dict[elements[i]] == undefined)
                dict[elements[i]] = 1;
            else
                dict[elements[i]]++;
        }

        var curTimes = 0;
        var curNumb = 0;

        for (var arr in dict) {

            curNumb = arr;

            if (curNumb == number) {
                curTimes = parseInt(dict[arr]);
                break;
            }
        }

        if (testTimes == curTimes) {
            result = ("True test");
        }
        else {
            result = ("Wrong unit test");
        }

        $('#resIsTes').text(result);
    });


    // 06 task

    $('#btnIsFN').click(function () {
        var input = ($('#txtIsFN').val());
        var currentNumber = parseFloat($('#txtIsFN1').val());

        var elements = input.split(",");
        var isInt = currentNumber % 1 === 0;

        for (var i = 0; i < elements.length; i++) {
            elements[i] = jQuery.trim(elements[i]);
        }

        var result = "";

        if (isInt && currentNumber < elements.length - 1 && currentNumber > 0) {
            var isBigger = checkNeigthbors(elements, currentNumber);
            if (isBigger) {
                result = "The element is bigger than its two neigthbors";
            }
            else {
                result = "The element is NOT bigger than its two neigthbors";
            }
        }
        else {
            result = "Wrong input format or index";
        }

        $('#resIsFN').text(result);
    });

    function checkNeigthbors(elements, currentNumber) {
        if (elements[currentNumber] > elements[currentNumber - 1] && elements[currentNumber] > elements[currentNumber + 1]) {
            return true;
        }
        else {
            return false;
        }
    }


    // 07 task

    $('#btnIsBsA').click(function () {
        var elements = $('#txtIsBsA').val().split(',');

        for (var i = 0; i < elements.length; i++) {
            elements[i] = jQuery.trim(elements[i]);
        }
        var result = "-1";
        var currentNumber = 1;

        for (var i = 1; i < elements.length - 1; i++) {
            currentNumber = i;
            var isBigger = checkNeigthbors(elements, currentNumber);
            if (isBigger) {
                result = "The element is bigger than its two neigthbors";
                result = (sprintf("The %f element is bigger than its two neigthbors.", currentNumber));
                break;
            }
            else {
                continue;
            }
        }

        $('#resIsBsA').text(result);
    });
});