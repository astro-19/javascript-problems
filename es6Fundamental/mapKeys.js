// Define the function 'mapKeys' to map the keys of an object using a given function.
const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});

console.log(mapKeys({ a: 1, b: 2 }, (val, key) => key + val));
