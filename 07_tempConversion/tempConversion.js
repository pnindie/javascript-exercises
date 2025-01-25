const convertToCelsius = function(inputInF) {
  return parseFloat(((inputInF -32) / 1.8).toFixed(1))
};

const convertToFahrenheit = function(inputInC) {
  return parseFloat((32 + 1.8* inputInC).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
