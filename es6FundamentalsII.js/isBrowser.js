// Define a function 'isBrowser' that checks if the code is running in a browser environment
const isBrowser = () => ![typeof window, typeof document].includes("undefined");

console.log(isBrowser());
console.log(isBrowser());
