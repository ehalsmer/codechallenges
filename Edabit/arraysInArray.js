/*
Return the total number of arrays inside a given array.

Examples
numOfSubbarrays([[1, 2, 3]]) ➞ 1

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

numOfSubbarrays([1, 2, 3]) ➞ 0
*/

// One solution:
function numOfSubbarrays(arr) {
	let count = 0;
	arr.forEach(item => {
		if(Array.isArray(item)){
			count++
		}
	})
	return count;
}

// Another solution that uses filter:
function numOfSubbarrays2(arr){
    return arr.filter(item => Array.isArray(item)).length
}

console.log(numOfSubbarrays2([1,2,3, [2,3], [1]]))