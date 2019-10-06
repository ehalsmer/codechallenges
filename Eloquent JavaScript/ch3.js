// a function that takes two arguments and returns the minimum value
function minimum(x, y){
    return x < y ? x : y
}
console.log(minimum(2, 2))

// checking evenness with modulo operator:
function even(n){
    return n % 2 === 0
}
console.log(even(24))

// a recursive function to check evenness:
// zero is even, one is odd, and for any other number n, evenness of n is the same as evenness of n-2
function isEven(n){
    n = Math.abs(n)
    if (n == 0){
        return 'even'
    }
    else if (n == 1){
        return 'odd'
    }
    else {
        return isEven(n-2)
    }
}

console.log(isEven(-8))