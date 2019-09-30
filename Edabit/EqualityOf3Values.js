/*
Create a function that takes three integer arguments (a, b, c) and returns the number of equal values.

Examples
equal(3, 4, 3) ➞ 2

equal(1, 1, 1) ➞ 3

equal(3, 4, 1) ➞ 0
Notes
Your function must return 0, 2 or 3.

check a == b, a == c, b == c
*/

function equal(a,b,c){
    if (a == b && b == c) return 3
    if (a == b || a == c || b == c) return 2
    else return 0
}

console.log(equal(1,1,1))
console.log(equal(3,4,1))
console.log(equal(2,2,3))
console.log(equal(4,0,4))
console.log(equal(3,5,5))
// seems like it's impossible to get 2? This doesn't make a lot of sense..