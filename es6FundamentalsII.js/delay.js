// Define a function 'delay' to execute a function after a specified delay
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

delay(
  function (text) {
    console.log(text);
  },
  1000,
  "later"
);
