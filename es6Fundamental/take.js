// Define the 'take' function.
const take = (arr, n = 1) => arr.slice(0, n);

console.log(take([1, 2, 3], 5));
console.log(take([1, 2, 3], 0));
