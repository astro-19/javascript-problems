// Import the default function
import greet, { add, subtract } from './greet.js';
// import { add, subtract, multiply, divide } from './arithmetic.js';
import * as utils from './utilities.js';

// Use the imported function
console.log(greet('Sara'));

// Use the imported functions
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

// Use the imported properties
console.log(utils.capitalize('hello')); // Output: Hello
console.log(utils.reverse('world'));   // Output: dlrow
console.log(utils.toLowerCase('TEST')); // Output: test  

