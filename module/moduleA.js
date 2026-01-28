// Importing the shared module
import { sharedFunction } from './shared.js';

// Defining a function and exporting it
export function functionA() {
    console.log('Function A in Module A');
    sharedFunction('from Module A');
}