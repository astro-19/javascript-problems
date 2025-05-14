// Define a function 'btoa' to encode a string to base64
const btoa = (str) => new Buffer(str, "binary").toString("base64");

console.log(btoa("foobar"));
