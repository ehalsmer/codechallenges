// recursive fibonacci function:

function simpleFibonacci(n){
    if ((n === 0) | (n === 1)){
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

// note: fibonacci(4) is in fact the 5th fibonacci number, if we start counting at n=0, and start indexing at 0. Sequence: 0, 1, 1, 2, 3, 5, ...
// console.log(simpleFibonacci(4))
// console.log(fibonacci(50)) // Don't run this line. The poor performance and recursion
// make the fibonacci function a good candidate for memoization.

function memoFibonacci(n){
    let memo = {}
    function fibonacci(n){
        let value;
        if (n in memo){
            value = memo[n] // if n is in memo, use the value in memo
        } else { // if not, compute it:
            if (n === 0 | n === 1){
                value = n
            } else {
                value = fibonacci(n-1) + fibonacci(n-2)
                memo[n] = value // put newly computed value at n in memo
            }
        }
        console.log(memo)
        return value;
    }
    return fibonacci(n)
}

console.log(memoFibonacci(50));