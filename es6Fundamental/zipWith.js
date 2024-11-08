// Define the 'zipWith' function to zip arrays together and apply a custom function to their elements.
const zipWith = (...arrays) => {
  const fn =
    typeof arrays[arrays.length - 1] === "function" ? arrays.pop() : undefined;

  return Array.from(
    { length: Math.max(...arrays.map((a) => a.length)) },
    (_, i) => {
      if (fn) return fn(...arrays.map((a) => a[i]));

      return arrays.map((a) => a[i]);
    }
  );
};

console.log(
  zipWith(
    [1, 2, 3],
    [10, 20],
    [100, 200],
    (a, b, c) =>
      (a != null ? a : "a") + (b != null ? b : "b") + (c != null ? c : "c")
  )
);
