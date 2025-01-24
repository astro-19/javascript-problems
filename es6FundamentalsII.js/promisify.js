// Define a function 'promisify' to convert a callback-based function into a promise-based function
const promisify =
  (func) =>
  (...args) =>
    new Promise((resolve, reject) =>
      func(...args, (err, result) => (err ? reject(err) : resolve(result)))
    );

const delay = promisify((d, cb) => setTimeout(cb, d));

delay(2000).then(() => console.log("Hi!"));
