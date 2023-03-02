// let person: { student: boolean; age: number } = { student: true, age: 20 };

// function 함수({ student, age }: { student: boolean; age: number }) {
//   console.log(student, age);
// }
// 함수({ student: true, age: 20 });

interface MaxFunc {
  (...params: number[]): number;
}

const maxFunc: MaxFunc = (...parmas) => {
  let maxs = 0;
  parmas.forEach((i) => {
    if (maxs < i) {
      maxs = i;
    }
  });
  return maxs;
};

console.log(maxFunc(1, 2, 3, 4, 5, 6, 76, 44, 33));

// interface Work2 {
//   user: string;
//   comment: number[];
//   admin: boolean;
// }

// const userInfo: Work2 = {
//   user: "kim",
//   comment: [1, 2, 3],
//   admin: false,
// };

// const func = ({
//   user,
//   comment,
//   admin,
// }: {
//   user: string;
//   comment: number[];
//   admin: boolean;
// }) => {
//   console.log(user);
//   console.log(comment);
//   console.log(admin);
// };

// let fff = func(userInfo);

type Work3 = number | string | boolean[];

const ddd: Work3 = [40, "wine", false];
