/*
    Backjoon 2231번 
    문제 : 분해합(https://www.acmicpc.net/problem/2231)
    난이도 : 브론즈 2 
*/
const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `1`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = parseInt(input());
let result = 0;

// 각 자리수의 최대값은 9이므로 N - 자릿수 * 9 부터 탐색 시작
const start = N - N.toString().length * 9;
for (let i = start; i <= N; i++) {
  let curArr = i.toString().split("").map(Number);
  let curArrSum = curArr.reduce((a, b) => a + b);
  if (i + curArrSum === N) {
    result = i;
    break;
  }
}

console.log(result);
