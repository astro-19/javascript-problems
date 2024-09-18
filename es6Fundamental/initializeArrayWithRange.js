// Define a function 'initialize_Array_With_Range' to create an array filled with a range of numbers.
const initialize_Array_With_Range = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i) => i * step + start
  );

console.log(initialize_Array_With_Range(5));
console.log(initialize_Array_With_Range(8, 3));
console.log(initialize_Array_With_Range(6, 0, 2));
