class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let sang = new Person("상현", 20);

class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price / 10;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
