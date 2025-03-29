// Define a function 'getType' to determine the type of a value
const getType = (v) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();

console.log(getType(new Set([1, 2, 3])));
