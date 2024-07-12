const removeFromArray = function(arr, ...args) {
    const filter = [...args];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (filter.includes(arr[i])) continue;
        result.push(arr[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
