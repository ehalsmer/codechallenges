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

console.log(perrin(26))