// Define a function called functionName
const functionName = (fn) => (console.debug(fn.name), fn);
// Log the name of the provided function and return the function itself
console.log(functionName(Math.max));
