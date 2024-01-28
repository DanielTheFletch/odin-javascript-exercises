const sumAll = function(num1, num2) {
    // Check that parameters are valid, non-negative integers
    if (!Number.isInteger(num1) || !Number.isInteger(num2))
        return "ERROR";
    else if (num1 < 0 || num2 < 0)
        return "ERROR";

    // Check for larger first number
    if (num1 > num2)
    {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    // Sum values from low to high, inclusive
    let sum = 0;
    for(let i = num1; i <= num2; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
