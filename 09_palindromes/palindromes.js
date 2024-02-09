const palindromes = function (phrase) {
    // Convert to lowercase and remove all non-alphanumeric characters
    const filtered = phrase.toLowerCase().split('').filter(c => isAlphanumeric(c)).join('');

    // Retrieve front and back half of phrase
    let middle = filtered.length / 2;
    const front = filtered.substring(0, middle).split('');
    const back = filtered.substring(middle, filtered.length).split('');

    // Ignore middle letter for odd-length phrases
    if (filtered.length % 2 === 1)
        back.shift();

    // Compare front/back for exact mirroring
    while (front.length > 0 && back.length > 0)
        if (front.pop() !== back.shift())
            return false;

    // No mismatches found -> valid palindrome
    return true;
};

// Helper function: Check that character a digit or a lowercase letter
function isAlphanumeric(c)
{
    const number = c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57;
    const lowercase = c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122;
    return number || lowercase;
}

// Do not edit below this line
module.exports = palindromes;
