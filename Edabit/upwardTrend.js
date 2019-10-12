/*
Create a function that determines if there is an upward trend.
Only upward, no inflection points down then up again

Examples
upwardTrend([1, 2, 3, 4]) ➞ true

upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false

upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permited!"

upwardTrend([1, 2, 3, 6, 7]) ➞ true
Notes
If there is a string element in the array, return "Strings not permited!".
The numbers don't have to be consectutive (e.g. [1, 3, 5] should still return true).
*/

function upwardTrend(arr){
    if (arr.every(element => typeof element !== 'string')){
        return 'numbers'
    } else {
        return 'Strings not permitted!'
    }
    
}

console.log(upwardTrend([1, 2, 3, "4"]))
console.log(upwardTrend([1, 2, 6, 5, 7, 8]))