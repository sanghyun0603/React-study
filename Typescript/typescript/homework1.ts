type CutZero = (s: string) => string;
type RemoveDash = (s: string) => number;

const cutZero: CutZero = (s) => {
  let res = s.replace(/^0+/, "");
  return res;
};
const removeDash: RemoveDash = (s) => {
  let res = s.replace(/-/g, "");
  return parseFloat(res);
};

console.log(cutZero("0응응"));
console.log(removeDash("1542-13251-131"));
