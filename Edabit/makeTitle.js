/*
Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

Examples
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
Notes
You can expect a valid string for each test case.

idea: use .split(" ") to turn to array, use something like CapitalizeTheNames.js, then .join(" ")
*/

function makeTitle(str){
    return str
        .split(" ")
        .map(word => word[0].toUpperCase()+word.slice(1))
        .join(" ")
}

console.log(makeTitle("This is a title"))