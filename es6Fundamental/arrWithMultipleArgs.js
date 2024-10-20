 // Define a function called `pull` that takes an array `arr` and any number of values `args`.
const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return pulled;
  };
  
  let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
  console.log(pull(arra1, 'a', 'c')); 
  let arra2 = ['a', 'b', 'c', 'a', 'b', 'c'];
  console.log(pull(arra2, 'b')); 