const leapYears = function(year) {
    // Leap years are years divisible by four
    // Years divisible by 100 are not leap years  
    if (year % 4 == 0 && year % 100 != 0){
        return true;
    }
    // unless they are divisible by 400
    else if (year % 400 == 0) {
        return true; 
    }
    else {
        return false;
    }


};

// Do not edit below this line
module.exports = leapYears;
