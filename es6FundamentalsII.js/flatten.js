// Define a function 'flatten' that flattens nested arrays up to a specified depth
const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

console.log(flatten([1, [2], 3, 4]));
console.log(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2));
