const repeatString = function(string, n) {
    // Check for negative repetition count
    if (n < 0)
    {
        return "ERROR";
    }

    // Add n repetitions of specified string to empty string
    let repeatedString = "";
    for (let i = 0; i < n; i++)
    {
        repeatedString += string;
    }
    
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
