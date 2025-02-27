// Define a function 'isPromiseLike' that checks if the given object 'obj' is similar to a Promise
const isPromiseLike = (obj) =>
  obj !== null &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

console.log(
  isPromiseLike({
    then: function () {
      return "";
    },
  })
);
console.log(isPromiseLike(null));
console.log(isPromiseLike({}));
