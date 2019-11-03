/*
Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of (the last digit of a * the last digit of b) = the last digit of c. Check examples for explanation.

Examples
lastDig(25, 21, 125) ➞ true
// The last digit of 25 is 5, the last digit of 21 is 1, and the last
// digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
// to the last digit of 125(5).

*/

function lastDig(a, b, c){
    return ((a % 10) * (b % 10)) % 10 === c % 10
}

console.log(lastDig(12, 15, 10))
console.log(lastDig(15228, 9209, 72162))

module.exports = lastDig;