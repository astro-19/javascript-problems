// Function to find all indexes of NaN in an array
function test(arr_nums){
    return arr_nums.map(function(el, i){
        if(isNaN(el)) 
          return i;
        return false;
    })
    .filter(function(el){
        return el;
    });
}

arr_nums = [2, NaN, 8, 16, 32];
console.log("Original array: "+arr_nums);
result = test(arr_nums);
console.log("Find all indexes of NaN in the said array: "+result);

arr_nums = [2, 4, NaN, 16, 32, NaN];
console.log("Original array: "+arr_nums);
result = test(arr_nums);
console.log("Find all indexes of NaN in the said array: "+result);

arr_nums = [2, 4, 16, 32];
console.log("Original array: "+arr_nums);
result = test(arr_nums);
console.log("Find all indexes of NaN in the said array: "+result);
