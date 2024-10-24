// Define the function 'maxN' to find the maximum 'n' values in an array.
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

console.log(maxN([1, 2, 3]));
console.log(maxN([1, 2, 3], 2));
