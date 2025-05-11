// Define a function 'atob' that decodes a base64 encoded string
const atob = (str) => new Buffer(str, "base64").toString("binary");

console.log(atob("Zm9vYmFy"));
