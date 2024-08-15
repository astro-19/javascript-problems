// Define a function called `filter_Non_UniqueBy` that filters an array of objects based on a provided comparison function.
const filter_Non_UniqueBy = (arr, fn) =>
    arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
  
  console.log(filter_Non_UniqueBy(
    [
      { id: 0, value: 'a' },
      { id: 1, value: 'b' },
      { id: 2, value: 'c' },
      { id: 1, value: 'd' },
      { id: 0, value: 'e' }
    ],
    (a, b) => a.id == b.id
  )); 
  