// Define a function 'hammingDistance' to calculate the Hamming distance between two numbers
const hammingDistance = (num1, num2) =>
  ((num1 ^ num2).toString(2).match(/1/g) || "").length;

console.log(hammingDistance(2, 3));
console.log(hammingDistance(5, 3));
