$(document).ready(function () {

    // 01 task

    $('#btnIsRev').click(function onCheckButtonClick() {

        var token = ($('#txtIsRev').val());
        var result = reverseString(token);

        $('#resIsRev').text(result);
    });

    function reverseString(token) {
        var sb = new StringBuilder();

        for (var i = token.length - 1; i >= 0; i--) {
            sb.append(token[i]);
        }
        return sb.toString();
    }

    // 02 task

    $('#btnIsSign').click(function onCheckButtonClick() {

        var token = ($('#txtIsSign').val());
        var result = "";
        var areCorrect = checkBrackets(token);

        if (areCorrect) {
            result = "Brackets are correct -> true";
        }
        else {
            result = "Brackets are correct -> false";
        }

        $('#resIsSign').text(result);
    });

    function checkBrackets(token) {
        var areCorrect = true;
        var openBs = 0;
        var closeBs = 0;
        for (var i = 0; i < token.length; i++) {
            if (openBs < closeBs) {
                break;
            }
            if (token[i] == "(") {
                openBs++;
            }
            else if (token[i] == ")") {
                closeBs++;
            }
        }

        if (openBs != closeBs) {
            areCorrect = false;
        }

        return areCorrect;
    }

    // 03 task

    $('#btnIsCou').click(function onCheckButtonClick() {

        var sWord = ($('#txtIsCou1').val());
        var text = ($('#txtIsCou').val());
        //var input = document.getElementById("txtIsCou").value;
        var result = 0;
        if (sWord != null) {
            sWord = sWord.trim();
            result = getStringOccurrences(text, sWord, true);
        }       

        $('#resIsCou').text(result);
    });

    function getStringOccurrences(text, stringToFind, ignoreCase) {

        if (ignoreCase) {
            text = text.toUpperCase();
            stringToFind = stringToFind.toUpperCase();
        }

        var count = 0;
        var index = text.indexOf(stringToFind, 0);

        while (index != -1) {
            count++;
            index = text.indexOf(stringToFind, index + 1);
        }

        return count;
    }

    // 04 task

    $('#btnIsNT').click(function () {

        var text = ($('#txtIsNT').val());
        var result = "";

        if (text != null) {

            result = initializeTags(text);
        }

        $('#resIsNT').text(result);
    });

    function initializeTags(text) {

        var sb = new StringBuilder();
        var curstate = 4;
        for (var i = 0; i < text.length - 1; i++) {

            var c = text[i];
            var cn = text[i + 1];
            if (c == "<" && cn == "m") {
                i += 9;
                if (curstate == 4) {
                    curstate = 1;
                }
            }
            else if (c == "<" && cn == "u") {
                i += 8;
                if (curstate == 4) {
                    curstate = 3;
                }
            }
            else if (c == "<" && cn == "l") {
                i += 9;
                if (curstate == 4) {
                    curstate = 2;
                }
            }
            else if (c == "<" && cn == "/") {
                var cnn = text[i + 2];

                if (cnn == "m") {
                    i += 10;
                    if (curstate == 1) {
                        curstate = 4;
                    }
                }
                else if (cnn == "u") {
                    i += 9;
                    if (curstate == 3) {
                        curstate = 4;
                    }
                }
                else if (cnn == "l") {
                    i += 10;
                    if (curstate == 2) {
                        curstate = 4;
                    }
                }
            }
            var currentChar = returnChar(i, curstate, text);
            sb.append(currentChar);
        }

        return sb.toString();
    }

    function returnChar(i, curstate, text) {

        counter++;

        switch (curstate) {
            case 1:
                if (counter % 2 === 0) {
                    return text[i].toLowerCase();
                }
                else {
                    return text[i].toUpperCase();
                }
                break;
            case 2:
                return text[i].toLowerCase();
                break;
            case 3:
                return text[i].toUpperCase();
                break;
            case 4:
                return text[i];
                break;
            default:
                return "error";
                break;
        }
    }
        
    var counter = 0;

    // 05 task
    
    $('#btnIsRep').click(function () {

        var rWord = "&nbsp;";
        var text = ($('#txtIsRep').val());
        var result = "";

        if (rWord != null) {

            for (var i = 0; i < text.length; i++) {
                if (text[i] === " ") {
                    result += rWord;
                }
                else {
                    result += text[i];
                }
            }
        }
       
        $('#resIsRep').text(result);
    });

    // 06 task

    $('#btnIsExt').click(function () {

        var open = "<";
        var close = ">";
        var counter = 0;
        var text = ($('#txtIsExt').val());
        var result = "";

        if (text != null) {

            for (var i = 0; i < text.length; i++) {
                if (text[i] === open) {
                    counter++;
                }
                if (counter == 0) {
                    result += text[i];
                }
                if (text[i] === close) {
                    counter--;
                }
            }
        }

        $('#resIsExt').text(result);
    });


    // 07 task

    $('#btnIsFiv').click(function () {
        var fileName = ($('#txtIsFiv').val());
        var result = "";

        var protocolOnly = Protocol(fileName);
        var serverOnly = Server(fileName);
        var resourseOnly = Resourse(fileName);
     
        var myJSONObject = {
            protocol: protocolOnly,
            server: serverOnly,
            resource: resourseOnly 
        };

        result = (sprintf("Protocol: %s | Server: %s | Resource: %s", myJSONObject.protocol, myJSONObject.server, myJSONObject.resource));

        $('#resIsFiv').text(result);
    });

    function Protocol(fileName) {

        var protocol = "";
        var protIndex = fileName.indexOf("://");
        if (protIndex != -1)
        {
            protocol = fileName.substring(0, protIndex);
        }
        return protocol;
    }

    function Server(fileName) {

        var server = "";
        var servIndex = fileName.indexOf("://");
        var indexOfSlash = fileName.indexOf("/", servIndex + 3);
        if (servIndex != -1)
        {
            server = fileName.substring(servIndex + 3, indexOfSlash);
        }
        return server;
    }


    function Resourse(fileName) {

        var resourse = "";
        var servIndex = fileName.indexOf("://");
        var indexOfSlash = fileName.indexOf("/", servIndex + 3);
        if (indexOfSlash != -1)
        {
            resourse = fileName.substring(indexOfSlash);
        }
        return resourse;
    }

    // 08 task

    $('#btnIsTag').click(function () {

        var text = ($('#txtIsTag').val());
        var result = "";

        if (text != null) {

            result = changeAhref(text);
        }

        $('#resIsTag').text(result);
    });
  

    function changeAhref(text) {

        text = text.replace(/<a href=/gi, "[URL=");
        text = text.replace(/">/gi, "\"]");
        text = text.replace(/<\/a>/gi, "[/URL]");

        return text;
    }

    // 09 task

    $('#btnIsEma').click(function () {

        var text = ($('#txtIsEma').val());
        var result = "";

        if (text != null) {

            result = extractEmails(text);
        }

        $('#resIsEma').text(result.join('\n'));
    });

    function extractEmails(text) {
        var regex = /\b\w+[\w\-]*(\.\w+[\w\-]*)*@[a-z0-9]+[a-z0-9-]*(\.[a-z0-9]+[a-z0-9-]*)*(\.[a-z]{2,6})\b/g;
        return text.match(regex);
    }

    // 10 task

    $('#btnIsPal').click(function () {

        var text = ($('#txtIsPal').val());
        var result = "";

        if (text != null) {

            result = extractPalindromes(text);
        }

        $('#resIsPal').text(result.join('\n'));
    });

    function extractPalindromes(text) {
        
        var sentences = text.match(/(\w*)/gi);
        var palindromes = [];
        var isPalindrome = false;

        for (var i = 0; i < sentences.length; i++) {
            if (sentences[i].length > 1) {

                isPalindrome = palidCheck(sentences[i]);

                if (isPalindrome) {
                    palindromes.push(sentences[i]);
                }
            }

        }

        return palindromes;
    }

    function palidCheck(word) {
        for (var i = 0; i < word.length / 2; i++) {
            
            if (word[i] == word[word.length - 1 - i]) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }


    // 11 task

    $('#btnIsSF').click(function () {

        var text = ($('#txtIsSF').val());
        var resarr = text.split(",");
        var expression = resarr.shift();
        var result = "";

        if (expression != null) {

            result = expression.format(resarr);
        }

        $('#resIsSF').text(result);
    })

    String.prototype.format = function (args) {
        var str = this;
        return str.replace(String.prototype.format.regex, function (item) {
            var intVal = parseInt(item.substring(1, item.length - 1));
            var replace;
            if (intVal >= 0) {
                replace = args[intVal];
            } else if (intVal === -1) {
                replace = "{";
            } else if (intVal === -2) {
                replace = "}";
            } else {
                replace = "";
            }
            return replace;
        });
    };
    String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");


    // 12 task

    var people = {
        0: {
            name: "Peter",
            age: 14,
            gender: "male"
        },

        1: {
            name: "Maria",
            age: 19,
            gender: "female"
        },

        2: {
            name: "Hristo",
            age: 14,
            gender: "male"
        },

        3: {
            name: "Ivanka",
            age: 15,
            gender: "female"
        }
    }

    var ullist;

    $('#btnIsSFA').click(function () {

        ullist = document.getElementById('resultlist');

        for (var a in people) {

            var item = people[a];
            var formstring = '<li>Item: ' + a;

            for (var b in item) {

                var prop = b;
                var unit = item[b];
                formstring += '<strong> -{' + prop + '}-&nbsp&nbsp</strong>';
            }
            formstring += '</li>';

            ullist.innerHTML += formstring;
        }
    })

    $('#btnIsSFB').click(function () {

        var listelements = ullist.getElementsByTagName("li");
        var finallist = document.getElementById('finallist');

        for (var c in listelements) {

            var element = listelements[c];

            var item = people[c];
            var formstring = element.innerHTML;

            for (var b in item) {

                var prop = b;
                var unit = item[b];
                var res = formstring.replace("-{" + prop + "}-", unit);
                formstring = res;
            }

            if (formstring == undefined) { continue; }
            finallist.innerHTML += '<li>' + formstring + '</li>';
            
        }
    })

});
