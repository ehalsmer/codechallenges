// 'this' refers to whatever object you are currently inside of

const user = {
    name: 'George',
    email: 'george123@uvu.edu',
    age: 23,
    sayHello(){
        return `Hello, ${this.name}`
    }
}

console.log(user.sayHello());

const house = {
    price: 310000,
    squareFeet: 1811,
    zip: '84943',
    pricePerFt(){
        return this.price / this.squareFeet;
    }
}

console.log(house.pricePerFt())