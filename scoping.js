function getDate(){
    var today = new Date()
    console.log(today);
    function millisecondsSince1970(date){
        return Date.parse(date)
    }
    return millisecondsSince1970(today); // today is available because this line is with its the function scope
}

// console.log(today); // This will show undefined, because today is function scoped
console.log(getDate())

// write a function that takes in an array of prices and returns a new array of discounted prices.
// example: discountPrices([100, 200, 300], .5) // [50, 100, 150]

function discountPrices(arr, discount){
    return arr.map(price => price*discount)
}

console.log(discountPrices([100, 200, 300], .5))