// Define a function 'composeRight' that takes any number of functions as arguments and returns a new function.
const composeRight = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );

const add = (x, y) => x + y;
const square = (x) => x * x;

const addAndSquare = composeRight(add, square);

console.log(addAndSquare(1, 2));
console.log(addAndSquare(3, 2));
