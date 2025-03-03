// Define a function 'isObjectLike' that checks if the given value 'val' is object-like
const isObjectLike = (val) => val !== null && typeof val === "object";

console.log(isObjectLike({}));
console.log(isObjectLike([1, 2, 3]));
console.log(isObjectLike((x) => x));
console.log(isObjectLike(null));
