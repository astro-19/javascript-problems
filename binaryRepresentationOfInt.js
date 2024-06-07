// Define a function to count the number of set bits (1s) in the binary representation of a given integer
function Binary_Count_SetBits(a) 
{
  
  if (!Number.isInteger(a))
    {
      return('Parameter value is not an Integer!') 
    }

    return a.toString(2).split('0').length - 1
}
console.log(Binary_Count_SetBits(45)) 
console.log(Binary_Count_SetBits(17)) 
console.log(Binary_Count_SetBits("15")) 
