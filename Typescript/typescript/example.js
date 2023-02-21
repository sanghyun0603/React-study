var changed = function (nums) {
  var newnums = nums.map(function (num) {
    if (typeof num === "string") {
      var a = Number(num);
      return Number(num);
    } else {
      return num + 1;
    }
  });
  return newnums;
};
console.log(changed([123, "3"]));
// var changed = function (nums) {
//   return nums.map(function (num) {
//     if (typeof num === "string") {
//       var a = Number(num);
//       return Number(num);
//     } else {
//       return num;
//     }
//   });
// };
// console.log(changed([123, "3", "5", 12]));daas
