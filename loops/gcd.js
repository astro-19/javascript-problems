// Variables to store the two numbers for which GCD is calculated
var a = 2154; // First number
var b = 458;  // Second number 

var gcd; // Variable to store the Greatest Common Divisor (GCD)

// Iterative loop to find GCD using Euclidean algorithm
while (a != b) {
    // If 'a' is greater than 'b', subtract 'b' from 'a'
    if (a > b) {
        a = a - b;
    } else {
        // If 'b' is greater than 'a', subtract 'a' from 'b'
        b = b - a;
    }
}

// The GCD is stored in 'a'
gcd = a;

// Output the calculated GCD
console.log(gcd); 
