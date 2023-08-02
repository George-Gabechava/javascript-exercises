const palindromes = function (astring) {
    noPunctuation = astring.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"")
    var backwardsString = ""
    stringLength = noPunctuation.length
    i = stringLength-1;

    for (i; i >= 0; i--) {
        //console.log(i);
        backwardsString = backwardsString + noPunctuation[i];
        //console.log(backwardsString);
    }

    if (backwardsString.toUpperCase() == noPunctuation.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
