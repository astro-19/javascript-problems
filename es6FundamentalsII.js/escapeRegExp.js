// Define a function 'escapeRegExp' to escape special characters in a regular expression pattern
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

console.log(escapeRegExp("(test)"));
