// Define a function 'any' that checks if any element in the array satisfies the provided condition
const any = (arr, fn = Boolean) => arr.some(fn);

console.log(any([0, 1, 2, 0], (x) => x >= 2));
console.log(any([0, 0, 1, 0]));
