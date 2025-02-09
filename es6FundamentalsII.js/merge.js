// Define a function 'merge' that takes any number of objects as arguments using the rest parameter syntax '...objs'
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce(
        (a, k) => {
          acc[k] = acc.hasOwnProperty(k)
            ? [].concat(acc[k]).concat(obj[k])
            : obj[k];
          return acc;
        },
        {} // Initial value of the inner 'reduce' accumulator is an empty object
      ),
    {} // Initial value of the outer 'reduce' accumulator is an empty object
  );

const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: "foo",
};
console.log(merge(object, other));
