// Define a function 'reverseString' that reverses the characters in a string
const reverseString = (str) =>
  [...str].reverse().join("");

console.log(reverseString("php"));
console.log(reverseString("foobar")); 
