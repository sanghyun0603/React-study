//9강 2번째숙제
type CutZero = (s: string) => string;
type RemoveDash = (s: string) => number;
type Func = (s: string, c: CutZero, r: RemoveDash) => number;

const cutZero: CutZero = (s) => {
  let res = s.replace(/^0+/, "");
  return res;
};
const removeDash: RemoveDash = (s) => {
  let res = s.replace(/-/g, "");
  return parseFloat(res);
};

const func: Func = (s, c, r) => {
  let res1 = c(s);
  return r(res1);
};

console.log(func("010-1111-2312", cutZero, removeDash));
