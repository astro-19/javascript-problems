// Define a function 'fibonacci' to generate Fibonacci sequence up to the specified length
const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(6));
