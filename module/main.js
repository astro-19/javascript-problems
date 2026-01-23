// // Async function to dynamically import and use the module
// async function loadAndMultiply(a, b) {
//     // Dynamically importing the module
//     const mathModule = await import('./mathOperations.js');

//     // Using the imported function
//     console.log(mathModule.multiply(a, b)); // Logs the result of multiplication
// }

// // Calling the function
// loadAndMultiply(4, 5); // Logs 20

// //main.js
// // Function to conditionally import a module and use its functions
// async function calculate(a, b, operation) {
//     if (operation === 'add') {
//         // Conditionally importing the module for addition
//         const { add } = await import('./mathUtils.js');
//         console.log(add(a, b)); // Logs the sum
//     } else if (operation === 'multiply') {
//         // Conditionally importing the module for multiplication
//         const { multiply } = await import('./mathUtils.js');
//         console.log(multiply(a, b)); // Logs the product
//     } else {
//         console.log('Invalid operation'); // Handles invalid input
//     }
// }

// // Calling the function
// calculate(2, 3, 'add'); // Logs 5
// calculate(2, 3, 'multiply'); // Logs 6

// *************************************************************************
// Importing constants using named exports
import { PI, EULER, GOLDEN_RATIO } from './constants.js';

// Using the imported constants
console.log(`Value of PI: ${PI}`); // Logs 3.14159
console.log(`Value of Euler's Number: ${EULER}`); // Logs 2.71828
console.log(`Value of Golden Ratio: ${GOLDEN_RATIO}`); // Logs 1.61803


// *************************************************************************
// This file imports and uses the aggregated exports.
// Importing aggregated exports
import { add, subtract, toUpperCase, toLowerCase } from './index.js';

// Using the imported functions
console.log(add(5, 3)); // Logs 8
console.log(subtract(10, 4)); // Logs 6
console.log(toUpperCase('hello')); // Logs HELLO
console.log(toLowerCase('WORLD')); // Logs world

// *************************************************************************
//This file demonstrates importing and using the JSON data.
// Importing JSON data
import data from './data.json';

// Accessing properties from the JSON data
console.log(`Name: ${data.name}`); // Logs "Name: John Doe"
console.log(`Age: ${data.age}`); // Logs "Age: 30"
console.log(`Profession: ${data.profession}`); // Logs "Profession: Developer"

// *************************************************************************
// Importing the Person class
// import { Person } from './Person.js';

// // Instantiating and using the class
// const pers = new Person('Agenor Tigerlily', 30);
// console.log(pers.introduce());

// *************************************************************************

import { Person } from './Person.js';

// Extending the Person class
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Calling the parent constructor
        this.position = position; // Adding a new property
    }

    work() {
        // Method specific to the Employee class
        return `${this.name} is working as a ${this.position}.`;
    }
}

// Instantiating and using the extended class
const alice = new Employee('Viola Philomela', 28, 'Software Engineer');
console.log(alice.introduce());
console.log(alice.work());

// *************************************************************************
// Importing the default export and destructuring only the required functions
import mathUtils from './mathUtils.js';
const { add, divide } = mathUtils;

// Using the destructured functions
console.log(add(8, 2)); // Logs 10
console.log(divide(20, 4)); // Logs 5
