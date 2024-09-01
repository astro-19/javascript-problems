// Define a function that takes two parameters: 'obj' (an object) and 'arr' (an array of keys to omit).
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omit({ a: 1, b: "2", c: 3 }, ["b"]));
console.log(omit({ a: 1, b: 2, c: 3 }, ["c"]));
