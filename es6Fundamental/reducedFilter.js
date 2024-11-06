// Define the 'reducedFilter' function to filter an array of objects and return a new array of objects containing only selected keys based on a filtering function.
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map((el) =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );

const data = [
  {
    id: 1,
    name: "john",
    age: 24,
  },
  {
    id: 2,
    name: "mike",
    age: 50,
  },
];

console.log(reducedFilter(data, ["id", "name"], (item) => item.age > 24));
