class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getArea(){return Math.PI * (this.radius ** 2)}
    getPerimeter(){return 2 * Math.PI * this.radius}
}

let circ1 = new Circle(11);
let circ2 = new Circle(4.44);
console.log(circ1.getArea())
console.log(circ2.getPerimeter())
