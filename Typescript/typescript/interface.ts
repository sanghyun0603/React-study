//숙제1
// interface Product {
//   brand: string;
//   serial: number;
//   model: string[];
// }
// let 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };

// interface Product {
//   product: string;
//   price: number;
// }

// let bas: Product[] = [
//   { product: "청소기", price: 7000 },
//   { product: "삼다수", price: 800 },
// ];

//숙제4
//1. 이 object는 plus()함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줌.
//2. 이 ojbect자료는 minus()함수를 내부에 가지고 있으며, minus 함수는 파라미터 2개를 입력하면 빼서 return 해줌

interface Calcul {
  plus: (num1: number, num2: number) => number;
  minus: (num1: number, num2: number) => number;
}

let Cal: Calcul = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
console.log(Cal.minus(4, 50));
