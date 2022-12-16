const convertToCelsius = function(farenheitTemp) {
  farenheitTemp -= 32;
  farenheitTemp *= 5;
  farenheitTemp /= 9;
  farenheitTemp = parseFloat(farenheitTemp.toFixed(1));
  return farenheitTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  celsiusTemp *= 9;
  celsiusTemp /= 5;
  celsiusTemp += 32;
  celsiusTemp = parseFloat(celsiusTemp.toFixed(1));
  return celsiusTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
