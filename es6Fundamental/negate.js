// Define the function 'negate' to negate the result of a given function.
const negate =
  (func) =>
  (...args) =>
    !func(...args);

console.log([1, 2, 3, 4, 5, 6].filter(negate((n) => n % 2 === 0)));
