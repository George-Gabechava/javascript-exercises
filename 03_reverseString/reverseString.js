const reverseString = function(word) {
    n = word.length;
    i = word.length-1;
    let reversedWord = ""
    // for loop to take last letter and add it to a new string.
    for (i; i >= 0; i--) {
        //console.log(i);
        //console.log(word[i]);
        reversedWord += word[i];
    }
    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
