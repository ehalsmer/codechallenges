// a simple greet function with two arguments
const greet = function(greeting, name){
    console.log(greeting + ", " + name)
}

greet("Hello", "Lindsay")

// rewrite it using simple nested currying, so that the basic function only requires a greeting,
// and returns another function that takes the name of the person we want to greet:
// note the nested function is anonymous

const greet2 = function(greeting){
    return function(name){
        console.log(greeting + ", " + name);
    };
};

greet2('Hi')('Michelle')
