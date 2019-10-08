/*
Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

Examples
reverseImage([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]) ➞ [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0]
]

reverseImage([
  [1, 1, 1],
  [0, 0, 0]
]) ➞ [
  [0, 0, 0],
  [1, 1, 1]
]

reverseImage([
  [1, 0, 0],
  [1, 0, 0]
]) ➞ [
  [0, 1, 1],
  [0, 1, 1]
]
*/

function reverseImage(image){
    return image.map(row => row.map(pixel => {
        return pixel == 0 ? 1 : 0
    }))
}

// because + can be used as a unary operator, which returns the numberic representation of an object, we can simplify this to:
function reverseImage2(image){
    return image.map(row => row.map(pixel => +!pixel))
}

// other options include using Boolean()

console.log(reverseImage2([
    [1, 0, 1],
    [0, 0, 0]
  ]))