/*
    Backjoon 4673번 
    문제 : 셀프 넘버 (https://www.acmicpc.net/problem/4673)
    난이도 : 실버 5
*/

Set.prototype.difference = function (setB) {
  let difference = new Set(this);
  for (let elem of setB) {
    difference.delete(elem);
  }
  return difference;
};

let selfNumber = new Set(Array.from({ length: 10000 }, (_, i) => i + 1));
let notSelfNumber = new Set();

for (let i = 1; i <= 10000; i++) {
  let result = i;
  result
    .toString()
    .split("")
    .forEach((a) => {
      result += parseInt(a);
    });
  notSelfNumber.add(result);
}

selfNumber = selfNumber.difference(notSelfNumber);
let selfNumberList = [...selfNumber];
for (let i = 0; i < selfNumberList.length; i++) {
  console.log(selfNumberList[i]);
}
