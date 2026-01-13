// Import the default function
import greet from './greet.js';
import { multiply, divide } from './arithmetic.js';
import * as utils from './utilities.js';

// export { add, subtract } from './mathOperations.js';

// Importing named exports with alias
import { add as sum, subtract as difference } from './mathUtils.js';

// Using the imported functions with their aliases
console.log(sum(5, 3)); // Logs the sum of 5 and 3
console.log(difference(5, 3)); // Logs the difference of 5 and 3


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

