/*
Create a function that takes a number as an argument and returns a string formatted to separate thousands.

Examples
formatNum(1000) ➞ "1,000"

formatNum(100000) ➞ "100,000"

formatNum(20) ➞ "20"

*/
// Ideas:
// string.replace() 'returns a new string with some or all matches of a pattern replaced by a replacement'. 
// Pattern may be regex or string. String or function called as replacement for each match.
// if pattern is a string, only the first match will be replaced. Original string is left unchanged. (MDN)

// or, use array.splice() to insert commas at intervals decrementing by three. Splice changes the original array. 
// with a while loop - a loop that will continue while the condition is true: 
/*
   while (condition){
       // code to execute
   }
*/

function formatNum(num){
    if (num.toString().length <= 3){
        return num.toString();
    } else {
        let array = num.toString().split('');
        for (i=array.length-3; i > 0; i-=3){
            console.log(i)
            array.splice(i, 0, ',')
        }
        return array.join('')
    }
}

console.log(formatNum('8931215256'))