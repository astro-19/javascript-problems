// Define a function 'indexOfAll' that takes an array 'arr' and a value 'val' as input
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
console.log(indexOfAll([1, 2, 3], 4));
