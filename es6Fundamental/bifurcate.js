// Define a function 'bifurcate' that takes an array 'arr' and a filter array 'filter' as input.
const bifurcate = (arr, filter) =>
  arr.reduce(
    (acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc),
    [[], []]
  );

console.log(
  bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true])
);
