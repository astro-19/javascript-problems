// Define a function 'inRange' that checks if a number 'n' is within a specified range defined by 'start' and 'end' values
const inRange = (n, start, end = null) => {
  if (end && start > end) end = [start, (start = end)][0];
  return end == null ? n >= 0 && n < start : n >= start && n < end;
};

console.log(inRange(3, 2, 5));
console.log(inRange(3, 4));
console.log(inRange(2, 3, 5));
console.log(inRange(3, 2));
