// Define a function 'union' to return the union of two arrays.
const union = (a, b) => Array.from(new Set([...a, ...b]));

console.log(union([1, 2, 3], [4, 3, 2]));
console.log(union([1, 2, 3], [1, 2, 3]));
