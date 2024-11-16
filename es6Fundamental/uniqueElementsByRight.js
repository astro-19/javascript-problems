// Define a function 'uniqueElementsByRight' to return unique elements from an array based on a comparison function, iterating from right to left.
const uniqueElementsByRight = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);

    return acc;
  }, []);

console.log(
  uniqueElementsByRight(
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
