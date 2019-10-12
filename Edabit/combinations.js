/*
Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.

Examples
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120
Notes
Don't overthink this one.
*/

function combinations(){
    const reducer = (acc, current) => acc * current
    const args = Array.from(arguments).filter(x => x !== 0)
    return args.reduce(reducer)
}

console.log(combinations(2, 3, 4, 5))
console.log(combinations(3, 7, 4))
console.log(combinations(2, 3))
console.log(combinations(7, 6, 0))

