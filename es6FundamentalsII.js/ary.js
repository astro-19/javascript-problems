// Define a function 'ary' that takes a function 'fn' and a number 'n', returning a new function that accepts up to 'n' arguments
const ary =
  (fn, n) =>
  (...args) =>
    fn(...args.slice(0, n));

const firstTwoMax = ary(Math.max, 2);

console.log([[2, 6, "a"], [8, 4, 6], [10]].map((x) => firstTwoMax(...x)));
