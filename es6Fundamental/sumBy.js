// Define a function named sumBy that calculates the sum of the values returned by applying a function to each element in an array.
const sumBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn])
      .reduce((acc, val) => acc + val, 0);
  
  console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)); 
  console.log(sumBy([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n')); 
  