/*
Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

Box Sequence Image

Step 0: Start with 0
Step 1: Add 3
Step 2: Subtract 1
Repeat Step 1 & 2 ...
Examples
boxSeq(0) ➞ 0

boxSeq(1) ➞ 3

boxSeq(2) ➞ 2
Notes
Step (the input) is always a positive integer (or zero).
*/

function boxSeq(step){
    if (step == 0){
        return 0
    } else {
        if (step % 2 == 0){
            return step
        } else {
            return step + 2
        }
    }
}

// refactored with ternary, and because 0 is even, we don't need to check for 0. Input will always be greater than or equal to 0.

function boxSeq(step){
    return step % 2 == 0 ? step : step + 2
}

console.log(boxSeq(4))