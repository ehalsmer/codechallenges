/*
Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

Return a boolean value (true or false).
The string can contain any character.
When no x and no o are in the string, return true.
Examples
XO("ooxx") ➞ true

XO("xooxx") ➞ false

XO("ooxXm") ➞ true
// Case insensitive.

XO("zpzpzpp") ➞ true
// Returns true if no x and o.

XO("zzoo") ➞ false
Notes
Remember to return true if there aren't any x's or o's.
Must be case insensitive.
*/

function XO(str){
    let xCount = 0;
    let oCount = 0;
    for (i=0; i < str.length; i++){
        if(str[i] == 'x' || str[i] == 'X'){
            xCount++
        } else if (str[i] == 'o' || str[i] == 'O'){
            oCount++
        } else {
            continue;
        }
    }
    if (xCount == oCount){
        return true;
    } else {
        return false;
    }
}

// refactored to use .filter:

function XO2(str){
    const xCount = str.split("").filter(letter => letter == 'x' || letter == 'X').length;
    const oCount = str.split("").filter(letter => letter == 'o' || letter == 'O').length;
    return xCount == oCount
}

console.log(XO2('xxxooo'))