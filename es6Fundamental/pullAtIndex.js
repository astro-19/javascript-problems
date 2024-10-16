// Define a function called 'pull_at_Index' that takes two parameters: an array `arr` and an array of indices 'pullArr'.
const pull_at_Index = (arr, pullArr) => {
    let removed = [];
    let pulled = arr
      .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
      .filter((v, i) => !pullArr.includes(i)); 
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
  };
  
  let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
  console.log(pull_at_Index(arra1, [1, 3]));
  let arra2 =  [1, 2, 3, 4, 5, 6, 7];
  console.log(pull_at_Index(arra2, [4]));
  