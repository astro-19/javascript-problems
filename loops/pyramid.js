// Variables to control loop counters and character output
var x, y, chr;

// Outer loop for rows
for (x = 1; x <= 6; x++) {
    // Inner loop for characters in each row
    for (y = 1; y < x; y++) {
        // Accumulate asterisks in the 'chr' variable
        chr = chr + ("*");
    }

    // Print the accumulated characters for the current row
    console.log(chr);

    // Reset 'chr' for the next row
    chr = '';
} 
