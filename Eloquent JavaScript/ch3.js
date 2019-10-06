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
// zero is even, one is odd (base cases), and for any other number n, evenness of n is the same as evenness of n-2 (recursive step)
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

// Function to return the number of uppercase B's in a string:
function countBs(str){
    return str.match(/B/g).length
}

console.log(countBs('akejwBweBqmeBlwe weBq pw82be'))

// more general function, countChar, has second arg for which character to count
function countChar(str, char){
    const regex = new RegExp(`${char}`, 'g')
    return str.match(regex).length
}

console.log(countChar('Eleasah Halsmer', 'a'))
// countBs refactored:
function countBs2(str){
    return countChar(str, 'B')
}
console.log(countBs2('akejwBweBqmeBlwe weBq pw82be'))
