const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(addends) {
  return addends.reduce((sum, addend) => sum + addend, 0);
};

const multiply = function(factors) {
  return factors.reduce((product, factor) => product * factor, 1);
};

const power = function(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++)
    result *= base;

  return result;
};

const factorial = function(n) {
  // Recursively multiply values
  if (n > 1)
    return n * factorial(n - 1);

  // Base case (e.g., 0 or 1)
  else
    return 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
