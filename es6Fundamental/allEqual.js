// Define a function 'allEqual' to check if all elements in the array are equal.
const allEqual = (arr) => arr.every((val) => val === arr[0]);

console.log(allEqual([1, 2, 3, 4, 5, 6]));
console.log(allEqual([12, 12, 12, 12]));
