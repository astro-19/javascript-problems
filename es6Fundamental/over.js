// Define a higher-order function named 'over' that takes multiple functions as arguments and returns a new function.
const over =
  (...fns) =>
  (...args) =>
    fns.map((fn) => fn.apply(null, args));

const minMax = over(Math.min, Math.max);

console.log(minMax(1, 2, 3, 4, 5));
console.log(minMax(1, 2, 5, 4, 3));
console.log(minMax(1, 2, 5, -4, 3));
