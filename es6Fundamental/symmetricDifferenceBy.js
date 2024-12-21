// Define the 'symmetricDifferenceBy' function.
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map((v) => fn(v))),
    sB = new Set(b.map((v) => fn(v)));

  return [
    ...a.filter((x) => !sB.has(fn(x))),
    ...b.filter((x) => !sA.has(fn(x))),
  ];
};

console.log(symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
