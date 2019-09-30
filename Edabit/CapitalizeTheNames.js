// a function that takes an array of names and returns an array with the first letter capitalized

const array1 = ["mavis", "senaida", "letty"]
const array2 = ["samuel", "MABELLE", "letitia", "meridith"]
const array3 = ["Sylvia", "Kristal", "Sharilyn", "Calista"]

// Don't change the order

function capMe(arr){
    return arr.map(name => name[0].toUpperCase()+name.slice(1).toLowerCase())
}

console.log(capMe(array1))
console.log(capMe(array2))
console.log(capMe(array3))