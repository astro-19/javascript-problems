// Loop through numbers from 1 to 100
for (var i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    // If none of the above conditions are met, print the number
    else {
        console.log(i);
    }
} 
