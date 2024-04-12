// Write a JavaScript program to display the colors in the following way.

// Here is the sample array:
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Output
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n) {
    let order = ["th", "st", "nd", "rd"],
        date = n % 100;

    return date + (order[(date - 20) % 10] || order[date] || order[0]);
}
for (let n = 0; n < color.length; n++) {

    let ordinal = n + 1;

    let output = (Ordinal(ordinal) + " choice is " + color[n] + ".");
    console.log(output);
}
