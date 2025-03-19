// Define a function 'intersectionBy' that computes the intersection of two arrays based on a transformation function
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map((x) => fn(x)));
  return a.filter((x) => s.has(fn(x)));
};

console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
