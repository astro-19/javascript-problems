// function Counter() {
//     var count = 0
//     this.incrementCount = function () {
//       count++
//       console.log(count)
//     }
//   }

//   var adder = new Counter()
//   adder.incrementCount()


function createBase(num) {
  return function (N){
    return num + N
  }
}

var addBase = createBase(7)

console.log(addBase(10))