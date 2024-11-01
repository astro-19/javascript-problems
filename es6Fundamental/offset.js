// Define the 'offset' function to offset the elements of an array by a specified amount.
const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];

console.log(offset([1, 2, 3, 4, 5], 2));

console.log(offset([1, 2, 3, 4, 5], -2));
