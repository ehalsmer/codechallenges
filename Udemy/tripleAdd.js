function tripleAdd(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(tripleAdd(3)(4)(1))