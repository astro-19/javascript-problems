// Define a function 'initializeArrayWithRangeRight' that creates an array filled with a range of numbers, starting from 'start' (default: 0) to 'end' (inclusive), with a specified 'step' (default: 1), in reverse order
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

console.log(initializeArrayWithRangeRight(5));
console.log(initializeArrayWithRangeRight(7, 3));
console.log(initializeArrayWithRangeRight(9, 0, 2));
