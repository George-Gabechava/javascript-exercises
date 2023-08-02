const repeatString = function(word, n) {
    if (n == 0) {
        return "";
    } 
    else if (n < 0) {
        return "ERROR";
    }
    else {
        let i = 1;
        let statement = word;
        for (i; i < n; i++) {
            statement += word;
        }
        return statement;
        
    }



};

// Do not edit below this line
module.exports = repeatString;
