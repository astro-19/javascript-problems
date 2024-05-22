function f(x){
    X="x-"+ x
    return function(y){
        y="y-"+ x
    
    return function(z){
       return "z-"+ y
    }
  }
  }
  
  let g = f("a")("b")("c")