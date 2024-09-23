// Define a function 'bifurcateBy' to split an array into two groups based on the result of a function.
const bifurcateBy = (arr, fn) =>
  arr.reduce(
    (acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc),
    [[], []]
  );

console.log(bifurcateBy(["beep", "boop", "foo", "bar"], (x) => x[0] === "b"));
