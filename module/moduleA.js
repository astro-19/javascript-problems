// // Importing the shared module
// import { sharedFunction } from './shared.js';

// // Defining a function and exporting it
// export function functionA() {
//     console.log('Function A in Module A');
//     sharedFunction('from Module A');
// }

// Defining and exporting a function that requires delayed access
export function functionA() {
    console.log('Function A in Module A');
    const { functionB } = require('./moduleB.js'); // Importing within the function
    functionB(); // Calling functionB dynamically
}