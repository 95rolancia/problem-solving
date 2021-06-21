/*
    Backjoon 10870번 
    문제 : 피보나치수 5(https://www.acmicpc.net/problem/10870)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `11`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
console.log(fibo(N));

// 재귀 버전
function fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
// 반복문 버전
function fibo(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
