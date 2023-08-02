const removeFromArray = function(originalArray, ...toremove) {
    // Given an array, look for matching string and num 
    //to remove and make a new array.
    //Also ignore/continue if no match.
    n = toremove.length;
    i = 0;
    //Start with new array clone.
    let newArray = originalArray;
    for (i; i <= n; i++) {
        //Find out if the removable item exists in the array.
        findIndex = originalArray.indexOf(toremove[i]);
        
        //If no, skip it.
        if (findIndex == -1) {
            continue;
        }

        //Else, remove it.
        else { 
            newArray.splice(findIndex, 1)
        }
    }

    return newArray;

};




// Do not edit below this line
module.exports = removeFromArray;
