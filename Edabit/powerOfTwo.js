/*
https://edabit.com/challenge/x6hfHCyQtbvf6dQDK
Write a function that returns true if an integer is a power of 2, and false otherwise.

Examples
powerOfTwo(32) ➞ true

powerOfTwo(1) ➞ true

powerOfTwo(-7) ➞ false

powerOfTwo(18) ➞ false
*/

function powerOfTwo(x){
    return Number.isInteger(Math.log2(x))
}

console.log(powerOfTwo(256))