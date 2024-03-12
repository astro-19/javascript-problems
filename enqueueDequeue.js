var inputStack = [1,2,3]
var outputStack = [4,5,6]

function enqueue(input, item){
    return input.push(item)
}

function dequeue(input, output){
    if(output.length <=0){
        while(input.length >0){
            var eleToOutput = input.pop()
            output.push(eleToOutput)
        }
    }
    return output.pop()
}

console.log(dequeue(inputStack, outputStack))