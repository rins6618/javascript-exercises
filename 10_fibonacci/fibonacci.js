const fibonacci = function(nthFib) {
    let fibIdx = parseInt(nthFib);
    if (fibIdx === 0) return 0;            
    if (fibIdx < 0 || isNaN(fibIdx)) return "OOPS"; 

    const fibSequence = [1, 1];
    while (fibSequence.length < fibIdx) {
        const slice = fibSequence.slice(-2);
        const nextElement = slice.reduce( (sum, curr) => sum += curr);
        fibSequence.push(nextElement);
    }
    return fibSequence[fibIdx - 1];
};

// Do not edit below this line
module.exports = fibonacci;
