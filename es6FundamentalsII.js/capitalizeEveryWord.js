// Define a function 'capitalizeEveryWord' to capitalize the first letter of each word in a string
const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

console.log(capitalizeEveryWord("hello world!"));
