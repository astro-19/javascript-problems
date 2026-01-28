// Importing the shared module
import { sharedFunction } from './shared.js';

// Defining a function and exporting it
export function functionB() {
    console.log('Function B in Module B');
    sharedFunction('from Module B');
}