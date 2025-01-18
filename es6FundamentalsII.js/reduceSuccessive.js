// Define a function 'reduceSuccessive' that applies a binary function to the elements of an array
// Successively reduce the array using the provided binary function and an initial accumulator value
const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce(
    (res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res),
    [acc]
  );
console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0));
