/*
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

Examples
hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
Notes
In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
*/

// use an object to store key-value combinations for replacement, loop through with for/in, and create a RegExp(pattern[,flags]) with pattern being each letter

function hackerSpeak(str){
    const letters = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        s: 5
    }
    for (letter in letters){
        let regex = new RegExp(letter, "gi")
        str = str.replace(regex, letters[letter])
    }
    return str
}

// a simpler method, using [aeios] (finds any of the characters in the brackets) and a function as second .replace argument:

function hackerSpeak2(str){
    const letters = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        s: 5
    }
    return str.replace(/[aeios]/ig, letter => letters[letter])
}

console.log(hackerSpeak('hacker speak'))
console.log(hackerSpeak('become a coder'))

console.log(hackerSpeak2('hacker speak'))
console.log(hackerSpeak2('become a coder'))