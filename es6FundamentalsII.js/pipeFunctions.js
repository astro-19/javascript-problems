// Define a function 'pipeFunctions' that takes any number of functions as arguments and returns a new function
const pipeFunctions = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );
const add5 = (x) => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);

console.log(multiplyAndAdd5(5, 2));
console.log(multiplyAndAdd5(16, 2));
