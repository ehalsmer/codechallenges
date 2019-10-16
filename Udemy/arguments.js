function getTotal(n){
    const args = Array.from(arguments)
    console.log(args)
    if (arguments.length == 2){
      return arguments[0]+arguments[1]
    } else if (arguments.length == 1){
      return function(m){
        return n + m
      }
    }
  }
  
  // can be singly invoked getTotal(10,20)
  console.log(getTotal(10, 20));
  
  // or doubly invoked, currying getTotal(10)(20)
  
  console.log(getTotal(10)(20))