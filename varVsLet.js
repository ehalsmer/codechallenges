// the dangers of function scoping (and hoisting) with var

var callbacks = [];

(function(){
    return 'hello'
})()

// In this example, what will be printed in the console? [5,5,5,5,5], because of hoisting, and because var has functional scoping.

var callbacks = [];
(function() {
  for (var i = 0; i < 5; i++) {
    callbacks.push( function() { return i; } );
  }
})();console.log(callbacks.map( function(cb) { return cb(); } ));


// replace var with let to fix it
var callbacks2 = [];
(function() {
  for (let i = 0; i < 5; i++) {
    callbacks2.push( function() { return i; } );
  }
})();console.log(callbacks2.map( function(cb) { return cb(); } ));