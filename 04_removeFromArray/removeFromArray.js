const removeFromArray = function(array, ...args) {
    const removed = [];
    for (item of array)
    {
        if (args.includes(item) === false)
            removed.push(item);
    }
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
