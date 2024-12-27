// Define the 'splitLines' function that splits a string into an array of lines.
const splitLines = (str) => str.split(/\r?\n/);

console.log("Original string:");
console.log("This\nis a\nmultiline\nstring.\n");
console.log(splitLines("This\nis a\nmultiline\nstring.\n"));
