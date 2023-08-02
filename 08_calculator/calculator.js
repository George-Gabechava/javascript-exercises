const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a , b) {
  return a - b;
	
};

const sum = function(anarray) {
  //if array is zero/one number.
  if (anarray.length <= 1) {
    return (Number(anarray));
  }
  else {
    let total = 0;
    //Sum the array
    for (const i in anarray) {
          total = total + anarray[i];
    }
    return total;
  }
};

const multiply = function(anarray) {
    //if array is zero/one number.
    if (anarray.length <= 1) {
      return (Number(anarray));
    }
    else {
      let total = 1;
      //Sum the array
      for (const i in anarray) {
            total = total * anarray[i];
      }
      return total;
    }

};

const power = function(a, b) {
  let i = 1;
  let total = a;
  for (i; i < b; i++) {
      total = total * a;
  }
  return total; 

};

const factorial = function(a) {
  let i = 1;
  let total = 1;
  for (i; i <= a; i++) {
    total = total * i;
  }
  return total;

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
