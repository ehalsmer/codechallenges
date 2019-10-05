/*
Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

Examples
getMiddle("test") ➞ "es"

getMiddle("testing") ➞ "t"

getMiddle("middle") ➞ "dd"

getMiddle("A") ➞ "A"
*/

// remember, .slice is left inclusive, right exclusive: [_,_)
function getMiddle(str) {
  return str.length % 2 == 0
    ? str.slice(str.length / 2 - 1, str.length / 2 + 1)
    : str[Math.floor(str.length / 2)];
}

// using substr instead of slice, and using falsy value of 0 for str.length & 2
function getMiddle2(str) {
  return str.length % 2 ? str[Math.floor(str.length / 2)] : str.substr(str.length/2 - 1, 2)
}

console.log(getMiddle2("odd"));
console.log(getMiddle2("test"));
