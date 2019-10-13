// example of a common reason for using an IIFE:
// to avoid name collisions. For instance, jquery uses $.
// We avoid having our var $ = 'currency' overwrite the 
// entire app's $ variable by wrapping the entire file in 
// an IIFE. It creates a private scope for that file. 

(function doubleNumber(num) {
    return num * 2;
  })(10);

  (function() {
    
    function getTotal(a, b) {
      return a + b;
    }
    
    var $ = 'currency';
    
    if (true) console.log('hello world');
    
  })();