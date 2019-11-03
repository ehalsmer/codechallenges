/*
A number n is automorphic if n^2 ends in n.

For example: n=5, n^2=25

Create a function that takes a number and returns true if the number is automorphic, false if it isn't.

Examples
isAutomorphic(5) ➞ true

isAutomorphic(8) ➞ false

isAutomorphic(76) ➞ true
*/

// function could be used with other bases, by replacing 10 with base:

function isAutomorphic(n){
    const x = n ** 2;
    const k = n.toString().length;
    if(n === x % (10 ** k)){
        return true;
    } else{
        return false;
    }
}

// alternate, less verbose solution, using .endsWith string method:

const isAutomorphic2 = num => String(Math.pow(num, 2)).endsWith(num);

console.log(isAutomorphic(212890625))

module.exports = isAutomorphic;