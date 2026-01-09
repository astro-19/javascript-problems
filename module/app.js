// Import the default function
import greet from './greet.js';
// Import specific functions
import { add, subtract, multiply, divide } from './arithmetic.js';

// Use the imported function
console.log(greet('Sara'));

// Use the imported functions
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

