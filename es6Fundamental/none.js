// Define the 'none' function to check if none of the elements in an array satisfy a given condition.
const none = (arr, fn = Boolean) => !arr.some(fn);

console.log(none([0, 1, 3, 0], (x) => x == 2));
console.log(none([0, 0, 0])); //
