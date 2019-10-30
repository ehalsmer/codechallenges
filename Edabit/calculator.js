/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(num1, operator, num2){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0){
                return num1 / num2;
            } else {
                return "Can't divide by 0!"
            }
    }
}

console.log(calculator(4, "/", 0))

// examples of object literal alternative to switch:

const switching = (input) => ({
    "key1": "value1",
    "key2": "value2"
})[input]

console.log(switching('key3'))

const dogSwitch = (breed) => ({
    "border": "Border Collies are good boys and girls.",
    "pitbull": "Pit Bulls are good boys and girls.",
    "german": "German Shepherds are good boys and girls."
  })[breed]


// calculator refactored to use object literals:

const calculator2 = (num1, operator, num2) => ({
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num2 !== 0 ? num1 / num2 : "Can't divide by 0!"
})[operator]

console.log(calculator2(1, "-", 3))
