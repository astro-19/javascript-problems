// Async function to dynamically import and use the module
async function loadAndMultiply(a, b) {
    // Dynamically importing the module
    const mathModule = await import('./mathOperations.js');

    // Using the imported function
    console.log(mathModule.multiply(a, b)); // Logs the result of multiplication
}

// Calling the function
loadAndMultiply(4, 5); // Logs 20
