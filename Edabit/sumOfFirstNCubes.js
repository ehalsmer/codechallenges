/*
Create a function that takes a number steps as an argument and returns the amount of rectangles you can count in a matrix.

Examples
rectangle(1) ➞ 1

rectangle(2) ➞ 9

rectangle(3) ➞ 36
Notes
The input will always be an integer.

See https://oeis.org/A000537 for more details about this sequence
*/

function rectangle(n){
    let result = 0
    for (let i = n; i > 0; i--){
        result += i**3
    }
    return result
}

// function to compute array of first m numbers in sequence above
function sumOfFirstNCubes(n){
    let array = []
    for (let i = 1; i <=n; i++){
        array.push(rectangle(i))
    }
    return array;
}

console.log(sumOfFirstNCubes(8))




