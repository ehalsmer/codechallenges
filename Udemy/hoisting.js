// the variable and function declarations are hoisted, but not their
// initializations. So we'll get undefined until after they're
// initialized. 

console.log(color) // undefined

var color = "blue";

console.log(color) // blue


// function expression (using var, let, const) example:
// console.log(getProduct(3,4)) // cannot get access before initialization

const getProduct = function(num1, num2){
    return num1 * num2;
}

console.log(getProduct(3,4)) // 12

// function declarations are hoisted differently:

console.log(product(2,3)) // 6

function product(x,y){
    return x * y;
}

// example with nested functions

var globalVar = 'global';
// console.log(getState()) // not hoisted outside of its parent function

(function(){
    // console.log(getAge()) // not hoisted, function expression
    console.log(getState()); // hoisted, function declaration
    var name = 'Jennifer';
    
    var getAge = function(){
        return '30';
    };

    function getState(){
        return 'Delaware';
    }
})()
