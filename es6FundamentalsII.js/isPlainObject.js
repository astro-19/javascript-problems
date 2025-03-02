// Define a function 'isPlainObject' that checks if the given value 'val' is a plain object
const isPlainObject = (val) =>
  !!val && typeof val === "object" && val.constructor === Object;

console.log(isPlainObject({ a: 1 }));
console.log(isPlainObject(new Map()));
