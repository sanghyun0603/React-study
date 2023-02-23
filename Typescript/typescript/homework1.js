var cutZero = function (s) {
    var res = s.replace(/^0+/, "");
    return res;
};
var removeDash = function (s) {
    var res = s.replace(/-/g, "");
    return parseFloat(res);
};
console.log(cutZero("0응응"));
console.log(removeDash("1542-13251-131"));
