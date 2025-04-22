// Define a function 'distance' to calculate the Euclidean distance between two points in a 2D plane
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

console.log(distance(1, 1, 2, 3));
console.log(distance(-1, -1, 2, 3));
