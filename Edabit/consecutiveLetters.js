/*
Create a function that takes a word and returns true if the word has two consecutive identical letters.

Examples
doubleLetters("loop") ➞ true

doubleLetters("yummy") ➞ true

doubleLetters("orange") ➞ false

doubleLetters("munchkin") ➞ false

n{X,} matches any string that contains a sequence of at least X n's
*/

function doubleLetters(str){
    return (/(\w)\1/).test(str)
}

console.log(doubleLetters('yumm'))

