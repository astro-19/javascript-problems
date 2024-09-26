// Define a function 'castArray' to ensure that the input value is wrapped in an array.
const castArray = (val) => (Array.isArray(val) ? val : [val]);

console.log(castArray("w3r"));
console.log(castArray([100]));
