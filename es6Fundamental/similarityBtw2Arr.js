// Define the function to find similarity between two arrays
const similarity = (arr, values) => arr.filter((v) => values.includes(v));

console.log(similarity([1, 2, 3], [1, 2, 4]));
