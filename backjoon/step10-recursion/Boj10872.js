/*
    Backjoon 10872번 
    문제 : 팩토리얼(https://www.acmicpc.net/problem/10872)
    난이도 : 브론즈 3
*/
const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `0`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
console.log(factorial(N));

// 재귀 버전
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
// 반복문 버전
function factorial2(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
