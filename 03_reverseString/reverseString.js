const reverseString = function(str) {
    let result = "";
    let len = str.length;
    while (len --> 0) {
        result += str[len];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
