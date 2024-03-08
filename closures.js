function Counter() {
    var count = 0
    this.incrementCount = function () {
      count++
      console.log(count)
    }
  }
  
  console.log(count) // Error: count is not defined
  var adder = new Counter()
  adder.incrementCount() // 1