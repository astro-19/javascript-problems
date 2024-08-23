 // Define a function named without that filters out specified values from an array.
const without = (arr, ...args) => arr.filter(v => !args.includes(v));

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3)); 
