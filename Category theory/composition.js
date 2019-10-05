// composition function with input

function composeInput(func1, func2, input){
    return func1(func2(input))
}

// example. functions defined inline. Could also be named, probably

console.log(composeInput(x=>x+1, y=>y+2, 3))



// composition function that returns a function, rather than result:

function compose(func1, func2){
    return function composed(input){
        return func1(func2(input))
    }
}

// example:

const newFunction = compose(x=>x+2, y=>y+3)
console.log(newFunction(7))
