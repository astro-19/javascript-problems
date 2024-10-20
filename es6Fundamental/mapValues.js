// Define the function 'mapValues' to map each value of an object to a new value using a given function.
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});

const users = {
  fred: { user: "fred", age: 40 },
  pebbles: { user: "pebbles", age: 1 },
};
console.log(mapValues(users, (u) => u.age));
