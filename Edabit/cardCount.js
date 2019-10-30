/*
In BlackJack, cards are counted with -1, 0, 1 values:

2, 3, 4, 5, 6 are counted as +1
7, 8, 9 are counted as 0
10, J, Q, K, A are counted as -1
Create a function that counts the number and returns it from the array of cards provided.

Examples
count([5, 9, 10, 3, "J", "A", 4, 8, 5]) ➞ 1

count(["A", "A", "K", "Q", "Q", "J"]) ➞ -6

count(["A", 5, 5, 2, 6, 2, 3, 8, 9, 7]) ➞ 5
Notes
Sting inputs will always be upper case.
You do not need to consider case sensivity.
If the argument is empty, return 0.
No input other than: 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A".
*/

function count(arr){
    let result = 0;
    const add = [2, 3, 4, 5, 6];
    const subtract = [10, 'J', 'Q', 'K', 'A'];
    arr.forEach(card => {
        if (add.includes(card)){
            result++;
        } else if (subtract.includes(card)){
            result--;
        }
    })
    return result;
}

console.log(count([5, 9, 10, 3, "J", "A", 4, 8, 5]))
console.log(count(["A", "A", "K", "Q", "Q", "J"]))

/// Could also solve with a reduce
function countByReduce(deck) {
	return deck.reduce((a, c) => a + (c <= 6 ? 1 : c <= 9 ? 0 : -1), 0);
}