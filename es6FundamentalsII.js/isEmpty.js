// Define a function 'isEmpty' that checks if the given value 'val' is empty
const isEmpty = (val) => val == null || !(Object.keys(val) || val).length;

console.log(isEmpty(new Map()));
console.log(isEmpty(new Set()));
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty(""));
console.log(isEmpty([1, 2]));
console.log(isEmpty({ a: 1, b: 2 }));
console.log(isEmpty("text"));
console.log(isEmpty(123));
console.log(isEmpty(true));
