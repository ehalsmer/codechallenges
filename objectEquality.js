// because objects (and arrays) are reference types, == and === will check whether two refer to the same memory location, not compare values. 
// Write a function that compares the key/value pairs of two objects, returning false if any of them differ, and true otherwise.

const obj1 = {
    name: 'Emily',
    age: 32,
    location: 'Lafayette',
}

const obj2 = {
    name: 'Philip',
    age: 30,
    location: 'West Lafayette'
}

const obj3 = {
    name: 'Emily',
    age: 32,
    location: 'Lafayette'
}

// this function doesn't handle edge cases, so use a library with _.isEqual to handle deep comparison. Eg Underscore, Lo-Dash
function objectEquality(a, b){
    // check if same number of keys
    if (Object.keys(a).length !== Object.keys(b).length){
        return false;
    }
    // check if each value for same keys matches
    for (property in a){
        if (a[property] !== b[property]){
            return false
        }
    }
    return true;
}

console.log(objectEquality(obj1, obj3));