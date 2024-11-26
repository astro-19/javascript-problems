// Define the 'unary' function.
const unary = (fn) => (val) => fn(val);

console.log(["6", "8", "10"].map(unary(parseInt)));
