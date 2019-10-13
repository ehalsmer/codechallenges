/*
Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

Examples
unstretch("ppoeemm") ➞ "poem"

unstretch("wiiiinnnnd") ➞ "wind"

unstretch("ttiiitllleeee") ➞ "title"

unstretch("cccccaaarrrbbonnnnn") ➞ "carbon"
Notes
Final strings won't include words with double letters (e.g. "passing", "lottery").
*/

// solution using loop

function unstretch(word){
    let letters = word.split('')
    let unstretched = []
    for (let i = 0; i < letters.length; i++){
        if (i == 0){
            unstretched.push(letters[i])
        } else {
            if (letters[i] === letters[i-1]){
                continue;
            } else {
                unstretched.push(letters[i])
            }
        }
    }
    return unstretched.join('')
}

// refactored loop:

function unstretch(word){
    let letters = word.split('');
    let result = []
    for (let i = 0; i < letters.length; i++){
        if (letters[i] === letters[i-1]) {
            continue;
        } else {
            result.push(letters[i])
        }
    }
    return result.join('')
}



console.log(unstretch("ppoeemm"))