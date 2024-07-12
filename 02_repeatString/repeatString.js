const repeatString = function(str, num) {
    if (num < 0) return "ERROR"
    let result = "";
    while (num --> 0) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
