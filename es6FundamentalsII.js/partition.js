// Define a function 'partition' that partitions an array based on the result of a provided function 'fn'
const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },

    [[], []]
  );

const users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
];

partition(users, (o) => o.active);
console.log(users);
