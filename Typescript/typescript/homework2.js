var cutZero = function (s) {
  var res = s.replace(/^0+/, "");
  return res;
};
var removeDash = function (s) {
  var res = s.replace(/-/g, "");
  return parseFloat(res);
};
var func = function (s, c, r) {
  var res1 = c(s);
  return r(res1);
};
console.log(func("010-1111-2232322312", cutZero, removeDash));
