// Define the function 'mask' to mask part of a credit card number.
const mask = (cc, num = 4, mask = "*") =>
  ("" + cc).slice(0, -num).replace(/./g, mask) + ("" + cc).slice(-num);

console.log(mask(1234567890));
console.log(mask(1234567890, 3));
console.log(mask(1234567890, -4, "$"));
