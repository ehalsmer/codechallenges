// identity function
function id(x){
    return x
}

// test function
function f(x){
    return x.toString()
}

console.log(id(f('example')))
console.log(f(id('example')))
// f(x) == f(id(x))
// id(f(x)) == f(x)