/*
Each number in the Perrin sequence is created by summing the numbers two positions and three positions before it. The first three numbers are (3, 0, 2), and the sequence is extended as follows:

P(0) P(1) P(2) P(3) P(4) P(5) P(6) P(7) ... P(n)
3, 0, 2, 3, 2, 5, 5, 7, ...
Given a value for n, return the Perrin number P(n).

Examples
perrin(1) ➞ 0

perrin(8) ➞ 10

perrin(26) ➞ 1497
*/

// this function may be a good candidate for memoization

function perrin(n){
    if (n == 0){
        return 3
    } 
    else if (n == 1){
        return 0
    }
    else if (n == 2){
        return 2
    }
    else return perrin(n-2) + perrin(n-3)
}


function memoPerrin(n){
    let memo = {}
    function perr(n){
        let value;
        // find value either from memo or computation
        if (n in memo){
            value = memo[n]
        } else {
            if (n == 0){
                value = 3
            } 
            else if (n == 1){
                value = 0
            }
            else if (n == 2){
                value = 2
            }
            else value = perr(n-2) + perr(n-3)
            // set value to memo 
            memo[n] = value
        }
        return value;
    }
    return perr(n)
}

console.log(memoPerrin(398))