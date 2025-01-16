// Define a function 'omitBy' that removes properties from an object based on a provided predicate function
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omitBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number"));
