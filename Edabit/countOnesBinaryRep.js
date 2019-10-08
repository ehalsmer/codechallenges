/*
Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.

Examples
countOnes(0) ➞ 0

countOnes(100) ➞ 3

countOnes(999) ➞ 8
Notes
The input will always be a valid integer (number).
*/

function countOnes(n){
    let binRep = Number(n).toString(2);
    return binRep.match(/1/g) ? binRep.match(/1/g).length : 0
}

// alternately, use bitwise operator >>> 0 which shifts by zero but makes sure we have an unsigned integer. Instead of counting matches, replace 0s with ''
// and take the length of the resulting strings (of just 1s)
function countOnes(i) {
    return (i >>> 0).toString(2).replace(/0/g, '').length;
  }

console.log(countOnes(7))