// Define a function called `yes_No` that checks if the input string represents a "yes" or "no" value.
// It returns `true` for "yes", `false` for "no", and the default value if neither "yes" nor "no" is found.
const yes_No = (val, def = false) =>
    /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
  
  console.log(yes_No('Y'));
  console.log(yes_No('yes')); 
  console.log(yes_No('No')); 
  console.log(yes_No('Foo', true)); 
  