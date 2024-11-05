// Define the 'pickBy' function to pick key-value pairs from an object based on a filtering function.
const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(pickBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number"));
