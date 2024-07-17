const palindromes = function (str) {

    const VALID_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanStr = str
        .toLowerCase()
        .split("")
        .filter(char => VALID_CHARS.includes(char))
        .join("");

    const reverseStr = cleanStr
        .split("")
        .toReversed()
        .join("");
    
    return (cleanStr === reverseStr);

};

palindromes("Animal loots foliated detail of stool lamina.");

// Do not edit below this line
module.exports = palindromes;
