// Define a function 'initial' that returns a new array containing all elements of the input array except for the last element
const initial = (arr) => arr.slice(0, -1);

console.log(initial([1, 2, 3]));
console.log(initial([0, -1, -2]));
