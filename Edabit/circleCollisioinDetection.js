/*
Create a function that returns true if the given circles are intersecting, otherwise return false. 
The circles are given as two arrays containing the values in the following order:

Radius of the circle.
Position on the x-axis.
Position on the y-axis.
Examples
isCircleCollision([10, 0, 0], [10, 10, 10]) ➞ true

isCircleCollision([1, 0, 0], [1, 10, 10]) ➞ false
Notes
You can expect useable input and positive radii.
*/

function isCircleCollision(circle1, circle2){
    const distance = Math.sqrt((circle1[1]-circle2[1])**2 + (circle1[2]-circle2[2])**2)
    return circle1[0] + circle2[0] > distance
}

// refactored to use Math.hypot()
function isCircleCollision2(circ1, circ2){
    const hyp = Math.hypot(circ1[1]-circ2[1], circ1[2]-circ2[2])
    return circ1[0] + circ2[0] > hyp
}

console.log(isCircleCollision([10, 0, 0], [10, 10, 10]))
console.log(isCircleCollision2([10, 0, 0], [10, 10, 10]))

