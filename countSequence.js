
// function countSequence(sequence_input){
//     let count = 0
//     let arr = sequence_input.split('')
//     for(let i=0; i < arr.length; i++){
//             if(!i || arr[i] === arr[i-1]){
//                 count++
//             }
//     }
//     return count
// }

function countSequence(sequence_input){
    let count = 0
    let arr = sequence_input.split('')
    arr.forEach((el, i) => {
        if(!i || el === arr[i - 1]) count++;
    })
    return count++
}

console.time()
console.log(countSequence('00100'))
console.timeEnd()