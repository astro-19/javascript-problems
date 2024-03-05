let test= {
    testA: {
      testH: "H"
    },
    testB: {
      testG: "G"
    },
    testC: {
      testD: {
        testE: {
          testF: "F", testX:"X", textZ: "Z"
        }
      }
    }
  }
  
  // TVM
  var values = 'Z'
  
  for (const [key, value] of Object.entries(test)){
    x = "test"+values
    if (value.length !=1 ){
      y = "test"+values
      console.log("test_"+ key + "_" + y + " = "+ values)
      return 0
    }
    if(test[x] === values){
      console.log("test_"+ x +" = " +values)
      return 0
    }
    
  }
  
  // var result = "test";
  // let input = "G"
  // let found = false
  // const testcase = (test) => {
  // Object.keys(test).map((key, i)=>{
  
  // if(test[key] === input){
  // 	  found = true 
  //   	return `_${key}`
  // 	}
  //   else if (typeof test[key] === 'object'){
  //   // 	result += `_${key}`
  //   	result += `_${testcase(test[key])}
  //   	return
  // 	}
  // })
   
  // }
  
  // testcase(test)
  // console.log(`${result} = ${input}`)
  
  