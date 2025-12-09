// Using a for loop to iterate through numbers from 0 to 15
for (var x = 0; x <= 15; x++) {
    // Checking if the current number is 0
    if (x === 0) {
        console.log(x + " is even");
    }
    // Checking if the current number is even
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    // If the number is not 0 and not even, it is odd
    else {
        console.log(x + " is odd");
    }
} 
