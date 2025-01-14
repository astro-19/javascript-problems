// Define a function 'round' that rounds a number 'n' to the specified number of 'decimals'
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

console.log(round(1.005, 2));
console.log(round(1.05, 2));
console.log(round(1.0005, 2));
