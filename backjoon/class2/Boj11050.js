/*
    문제 : 이항 계수 1 (https://www.acmicpc.net/problem/11050)
    난이도 : 브론즈 1
*/
const fs = require("fs");
const { inflate } = require("zlib");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5 2`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input().split(" ").map(Number);
console.log(BC(N, K));
console.log(factorial(N) / (factorial(K) * factorial(N - K)));

function BC(n, k) {
  if (n === k || k === 0) return 1;
  return BC(n - 1, k - 1) + BC(n - 1, k);
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
