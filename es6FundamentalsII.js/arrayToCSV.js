// Define a function 'arrayToCSV' to convert a 2D array into a CSV string with a specified delimiter
const arrayToCSV = (arr, delimiter = ",") =>
  arr.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join("\n");

console.log(
  arrayToCSV([
    ["a", "b"],
    ["c", "d"],
  ])
);
console.log(
  arrayToCSV(
    [
      ["a", "b"],
      ["c", "d"],
    ],
    ";"
  )
);
