// Define a function 'coalesceFactory' that takes a validity check function 'valid' as input and returns another function.
const coalesceFactory =
  (valid) =>
  (...args) =>
    args.find(valid);
const customCoalesce = coalesceFactory(
  (_) => ![null, undefined, "", NaN].includes(_)
);

console.log(customCoalesce(undefined, null, NaN, "", "Waldo"));
