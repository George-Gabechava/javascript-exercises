const convertToCelsius = function(tempFtoC) {
  return Number(((tempFtoC -32) * 5 / 9).toFixed(1)) ;

};

const convertToFahrenheit = function(tempCtoF) {
  return Number((tempCtoF * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
