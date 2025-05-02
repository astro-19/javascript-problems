// Import the 'fs' module to work with the file system
const fs = require("fs");

const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));

JSONToFile({ test: "is passed" }, "testJsonFile");
