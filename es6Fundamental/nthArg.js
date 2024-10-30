// Define the 'nthArg' function to return a function that retrieves the nth argument passed to it.
const nthArg =
  (n) =>
  (...args) =>
    args.slice(n)[0];

const third = nthArg(2);
third(1, 2, 3);
third(1, 2);

const last = nthArg(-1);
console.log(last(1, 2, 3, 4, 5));
