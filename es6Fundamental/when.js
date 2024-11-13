// Define the 'when' function to conditionally apply a function to a value.
const when = (pred, whenTrue) => (x) => pred(x) ? whenTrue(x) : x;

const doubleEvenNumbers = when(
  (x) => x % 2 === 0,
  (x) => x * 2
);

console.log(doubleEvenNumbers(2));
console.log(doubleEvenNumbers(1));
