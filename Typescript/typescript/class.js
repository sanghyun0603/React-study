class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let sang = new Person("상현", 20);
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price / 10;
    }
}
let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
