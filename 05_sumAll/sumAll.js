const sumAll = function(num1, num2) {
    const numCheck = (typeof num1 !== "number" || typeof num2 !== "number");
    const negativeCheck = (num1 < 0 || num2 < 0);

    if (numCheck || negativeCheck) return "ERROR";

    const base = num1 < num2 ? num1 : num2;
    const limit = num1 === base ? num2 : num1;
    let sum = 0;

    for (let i = base; i <= limit; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
