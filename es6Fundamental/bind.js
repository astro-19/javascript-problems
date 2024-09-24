// Define a function 'bind' to bind a context and arguments to a function.
const bind = (fn, context, ...args) =>
  function () {
    return fn.apply(context, args.concat(...arguments));
  };

function greet(greeting, punctuation) {
  return greeting + " " + this.user + punctuation;
}

const freddy = { user: "Morning" };

const freddyBound = bind(greet, freddy);

console.log(freddyBound("Good", "!"));
