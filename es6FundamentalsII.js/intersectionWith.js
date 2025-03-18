// Define a function 'intersectionWith' that computes the intersection of two arrays based on a custom comparator function
const intersectionWith = (a, b, comp) =>
  a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);

console.log(
  intersectionWith(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0, 3.9],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
