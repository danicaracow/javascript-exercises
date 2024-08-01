const convertToCelsius = function(temp) {
  let resultTemp;

  resultTemp = Math.round(((temp-32)*(5/9)*10))/10;

  return resultTemp;
};

const convertToFahrenheit = function(temp) {
  let resultTemp;

  resultTemp = Math.round(((temp*(9/5)+32))*10)/10;

  return resultTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
