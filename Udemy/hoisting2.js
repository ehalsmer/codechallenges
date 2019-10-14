// 
 
function getTotal() {
    console.log(multiplier);
    console.log(total);
    
    let total = 0;
    
    for(var i = 0; i < 10; i++) {
      
      let valueToAdd = i;
      var multiplier = 2;
      total += valueToAdd * multiplier;
    }
    
    return total;
  }
   
  getTotal();
   
   
   
  // becomes:
   
  function getTotal() {
    let total; // block scope hoisted
    var multiplier; // function scope hoisted
    
    total = 0;
    
    for(var i = 0; i < 10; i++) {
      let valueToAdd;  // block scope hoisted
      
      valueToAdd = i;
      multiplier = 2;
      total += valueToAdd * multiplier;
    }
    
    return total;
  }
   
  getTotal();
  