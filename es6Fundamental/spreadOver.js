// Define the 'spreadOver' function.
const spreadOver = (fn) => (argsArr) => fn(...argsArr);

const arrayMax = spreadOver(Math.max);

console.log(arrayMax([1, 2, 3]));
