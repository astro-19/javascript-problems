// // Importing the shared module
// import { sharedFunction } from './shared.js';

// // Defining a function and exporting it
// export function functionB() {
//     console.log('Function B in Module B');
//     sharedFunction('from Module B');
// }

// Defining and exporting a function that requires delayed access
// export function functionB() {
//     console.log('Function B in Module B');
//     const { functionA } = require('./moduleA.js'); // Importing within the function
//     functionA(); // Calling functionA dynamically
// }

// Exporting a function
export function fetchData() {
    return 'Real data from the server';
}