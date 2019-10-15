var num = 50;
 
function logNumber() {
  console.log(num);
  var num = 100 // undefined, because var num is hoisted to above console.log, but def of 100 is not.
}
 
logNumber();

/////

var num = 50;
 
function logNumber() {
  console.log(num);
  let num = 100 // returns reference error instead of undefined, because of let. Const would do the same
}
 
logNumber();

/////

var num = 50;
 
function logNumber() {
    num = 100
    console.log(num); // 100
}
 
logNumber();

/////

var num = 50;
 
function logNumber() {
    console.log(num); // 50, num redefinition is not hoisted above console.log
    num = 100
}
 
logNumber();