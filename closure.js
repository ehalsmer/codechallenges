// class example of closure:

class MyClass {
    name = 'Alice';
    hello(){
        console.log(`Hello, ${this.name}`)
    }
}

new MyClass().hello();

// another example, using nested functions:

const globalVar = 'globalVar!';

function outerFunc(outerParam){
    const outerVar = 'outerVar!';
    function innerFunc(innerParam){
        const innerVar = 'innerVar!'
        console.log(innerVar, innerParam, outerVar, outerParam, globalVar)
    }
    innerFunc('innerParam!')
}
outerFunc('outerParam!')