// Define a function named to_Safe_Integer that converts a given number to a safe integer.
const to_Safe_Integer = num =>
    Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
   
   console.log(to_Safe_Integer('5.2'));   
   console.log(to_Safe_Integer('5.52')); 
   console.log(to_Safe_Integer(Infinity)); 
   