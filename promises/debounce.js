// Function to create a debounced function
function createDebouncedFunction(func, delay) {
  // Hold the timeout reference
  let timeout;

  // Return the debounced function
  return function (...args) {
    // Return a Promise
    return new Promise((resolve) => {
      // Clear any existing timeout
      clearTimeout(timeout);

      // Set a new timeout to delay execution
      timeout = setTimeout(() => {
        // Resolve the Promise with the function execution
        resolve(func(...args));
      }, delay);
    });
  };
}

// Example usage of the debounced function
const debouncedLog = createDebouncedFunction((message) => {
  console.log(message); // Log the message
  return "Message logged";
}, 1000);

// Call the debounced function multiple times
debouncedLog("Hello, World!").then(console.log); // Executes after 1 second
debouncedLog("Hello, JavaScript!").then(console.log); // Cancels previous call
