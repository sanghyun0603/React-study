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
// class Word {
//   num: number[];
//   str: string[];
//   constructor(name1: string, num1: number, num2: number, name2: string) {
//     this.num = [num1, num2];
//     this.str = [name1, name2];
//   }
// }
class Word {
    constructor(...param) {
        let numbers = [];
        let strings = [];
        param.forEach((i) => {
            if (typeof i === "string") {
                strings.push(i);
            }
            else {
                numbers.push(i);
            }
        });
        this.num = numbers;
        this.str = strings;
    }
}
let obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
