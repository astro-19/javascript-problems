// Define a function 'uniqueElementsBy' to return unique elements from an array based on a comparison function.
const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);

    return acc;
  }, []);

console.log(
  uniqueElementsBy(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
);
