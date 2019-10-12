/*
(aka FizzBuzz)
Create a function that returns the array of numbers from a given range. 
But for multiples of three, return “Eda” instead of the number 
and for the multiples of five, return “Bit”. 
For numbers which are multiples of both three and five, return “EdaBit”.

Examples
edaBit(0, 10) ➞ ["EdaBit", 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit" ]

edaBit(14, 20) ➞ [14,  "EdaBit", 16, 17,  "Eda", 19, "Bit" ]

edaBit(99, 106) ➞ ["Eda", "Bit", 101, "Eda", 103, 104, "EdaBit", 106 ]
Notes
In case the number 0 happens to be in the range, return "EdaBit" as well.
*/

function edaBit(a, b){
    let array = []
    for (let i = a; i <= b; i++){
        if (i % 15 === 0){
            array.push("EdaBit");
        }
        else if (i % 5 === 0){
            array.push("Bit");
        }
        else if (i % 3 === 0){
            array.push("Eda")
        }
        else {
            array.push(i)
        }
    }
    return array;
}

console.log(edaBit(99, 106))
console.log(edaBit(14, 20))
console.log(edaBit(0, 10))