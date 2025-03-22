// Define a function 'initializeArrayWithValues' that creates an array of length 'n' filled with a specified value 'val'
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);

console.log(initializeArrayWithValues(5, 2));
console.log(initializeArrayWithValues(4, 0));
