// Define a function 'collectInto' that takes a function 'fn' as input and returns another function.
const collectInto =
  (fn) =>
  (...args) =>
    fn(args);

const Pall = collectInto(Promise.all.bind(Promise));

let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise((resolve) => setTimeout(resolve, 2000, 3));

Pall(p1, p2, p3).then(console.log);
