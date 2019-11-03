/*
A number n is automorphic if n^2 ends in n.

For example: n=5, n^2=25

Create a function that takes a number and returns true if the number is automorphic, false if it isn't.

Examples
isAutomorphic(5) ➞ true

isAutomorphic(8) ➞ false

isAutomorphic(76) ➞ true
*/

function isAutomorphic(n){
    const x = n ** 2;
    console.log(x)
    const k = n.toString().length;
    console.log(k)
    if(n === x % (10 ** k)){
        return true;
    } else{
        return false;
    }
}

console.log(isAutomorphic(212890625))

module.exports = isAutomorphic;