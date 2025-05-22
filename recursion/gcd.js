// Function to calculate the greatest common divisor (GCD) of two numbers using Euclidean algorithm.
var gcd = function (a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

console.log(gcd(2154, 458));
