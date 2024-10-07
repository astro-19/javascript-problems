// Define a function 'differenceBy' to find the difference between two arrays based on a provided function.
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map((v) => fn(v)));
  return a.filter((x) => !s.has(fn(x)));
};

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], (v) => v.x));
