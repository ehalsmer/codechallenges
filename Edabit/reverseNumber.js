/*
Create a function that takes an integer n and reverses it.

Examples
rev(5121) ➞ "1215"

rev(69) ➞ "96"

rev(-122157) ➞ "751221"
Notes
This challenge is about using two operators that are releated to division.
If the number is negative, treat it like it's positive.
*/

function rev(n){
    return Math.abs(n).toString().split('').reverse().join('')
}

rev(-13)