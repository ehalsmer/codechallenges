/*
Write a function that converts an object into an array, where each element represents a key-value pair.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
Notes
Return an empty array if the object is empty.
*/

function toArray(obj){
    let arr = []
    for (let i = 0; i < Object.keys(obj).length; i++){
        arr.push([Object.keys(obj)[i], Object.values(obj)[i]])
    }
    return arr;
}

// or just use Object.entries(obj)

function toArray2(obj){
    return Object.entries(obj);
}

console.log(toArray2({ a: 3, b: 2}))