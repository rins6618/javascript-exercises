const leapYears = function(inputYear) {
    const centuryCheck = (inputYear % 100 === 0 && inputYear % 400 === 0);
    const nonCentCheck = (inputYear % 4 === 0 && !(inputYear % 100 === 0) );
    return nonCentCheck || centuryCheck;
};

// Do not edit below this line
module.exports = leapYears;
