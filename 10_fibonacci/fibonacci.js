const fibonacci = function(value) {

    // Check for invalid inputs
    const n = typeof value === 'number' ? value : parseInt(value);
    if (n === NaN || n < 0)
        return 'OOPS';

    // Evaluate Fibonacci sequence
    let curr = 0;
    let next = 1;
    for (let i = 0; i < n; i++)
    {
        const sum = curr + next;
        curr = next;
        next = sum;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
