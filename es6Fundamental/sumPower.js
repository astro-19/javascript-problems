// Define the 'sumPower' function.
const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);

console.log(sumPower(10));
console.log(sumPower(10, 3));
console.log(sumPower(10, 3, 5));
