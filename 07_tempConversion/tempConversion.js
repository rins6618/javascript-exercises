const roundOneDecimal = num => Math.round(num * 10) / 10;

const convertToCelsius = function(degreesFahrenheit) {
  return roundOneDecimal( (degreesFahrenheit - 32) * (5/9) );
};

const convertToFahrenheit = function(degreesCelsius) {
  return roundOneDecimal( (degreesCelsius * (9/5) ) + 32 );
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
