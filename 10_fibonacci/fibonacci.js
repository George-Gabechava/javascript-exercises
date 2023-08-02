const fibonacci = function(n) {

    //first create a fibonacci array of length n. Not counting 0?
    let i = 0;
    var fibArray = [1, 1];

    //answer for n = 1 or 2
    if (n == 1 || n == 2) {
        return 1;
    } 

    //rejects negatives 
    if (n < 0) {
        return "OOPS";
    }

    //accept strings (numbers)
    n = Number(n);

    //answer for n > 2
    keepgoing = true;
    currentnumber = 1;
    while(keepgoing) {
        newnumber = fibArray[currentnumber-1] + fibArray[currentnumber];
        //console.log(fibArray);
        fibArray.push(newnumber);
        currentnumber += 1;

        if (n == fibArray.length -1) {
            //keepgoing = false;
            return fibArray[n-1];
        }
        

    }


    //then pull and return the nth number

};




// Do not edit below this line
module.exports = fibonacci;
