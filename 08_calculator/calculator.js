const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0; 
	return arr.reduce((sum, curr) => sum += curr);
};

const multiply = function(arr) {
    return arr.reduce((sum, curr) => sum *= curr);
};

const power = function(base, pow) {
    // could solve with **
    let result = 1;
    for (let i = 1; i <= pow; i++) 
        result *= base;
    return result;
};

const factorial = function(num) {
	const factorialValues = [1];
    for (let i = 1; i <= num; i++) 
        factorialValues.push(i);
    return factorialValues.reduce( (last, curr) => last *= curr );
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
