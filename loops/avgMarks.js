// Array of students with their names and grades
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

// Loop through the students array to calculate the total marks
for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

// Calculate and log the average grade
console.log("Average grade: " + (Avgmarks) / students.length);

// Determine the grade based on the average
if (avg < 60) {
    console.log("Grade: F");
} else if (avg < 70) {
    console.log("Grade: D");
} else if (avg < 80) {
    console.log("Grade: C");
} else if (avg < 90) {
    console.log("Grade: B");
} else if (avg <= 100) {
    console.log("Grade: A");
} 
