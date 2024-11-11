// Define the 'zip' function to zip arrays together.
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map((x) => x.length));

  return Array.from({ length: maxLength }, (_, i) => {
    return arrays.map((arr) => arr[i]);
  });
};

console.log(zip(["a", "b"], [1, 2], [true, false]));
console.log(zip(["a"], [1, 2], [true, false]));
