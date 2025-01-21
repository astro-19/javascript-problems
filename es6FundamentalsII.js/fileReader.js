// Import the 'fs' module for file system operations in Node.js
const fs = require("fs");

const readFileLines = (filename) =>
  fs.readFileSync(filename).toString("UTF8").split("\n");

let arr = readFileLines("test.txt");

console.log(arr);
