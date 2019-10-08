// a function that removes duplicates and sorts an array of numbers

function uniqueSort(arr){
    return [...new Set(arr.sort((a,b)=>a-b))]
}

console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]))