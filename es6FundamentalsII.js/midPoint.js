// Define a function 'mid_point' to calculate the midpoint between two points in 2D space
const mid_point = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];

console.log(mid_point([6, 6], [4, 4]));
console.log(mid_point([2, -2], [4, 4]));
console.log(mid_point([2, 2], [-4, -1]));
console.log(mid_point([1, 3], [2, 5]));
