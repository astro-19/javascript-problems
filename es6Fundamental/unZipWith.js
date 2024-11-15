// Define a function 'unzipWith' to unzip an array of arrays and apply a function to each corresponding element.
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),

      Array.from({
        length: Math.max(...arr.map((x) => x.length)),
      }).map((x) => [])
    )
    .map((val) => fn(...val));

console.log(
  unzipWith(
    [
      [1, 10, 100],
      [2, 20, 200],
    ],
    (...args) => args.reduce((acc, v) => acc + v, 0)
  )
);
