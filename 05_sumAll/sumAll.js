const sumAll = function(a, b) {
    let lower = a;
    let higher = b;
    if (a < 0 || b < 0 || typeof(a) != 'number' ||  typeof(b) != 'number') {
        return 'ERROR';
    }

    if (a > b) {
        lower = b;
        higher = a;
    }

    i = lower;
    let sum = 0;
    for (lower; lower <= higher; lower++) {
        sum = sum + lower;    
        }
    return sum;


    

};

// Do not edit below this line
module.exports = sumAll;
