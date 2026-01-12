// Import the default function
import greet from './greet.js';
import { multiply, divide } from './arithmetic.js';
import * as utils from './utilities.js';

export { add, subtract } from './mathOperations.js';

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

