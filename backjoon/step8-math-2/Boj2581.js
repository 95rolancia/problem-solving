/*
    Backjoon 2581번 
    문제 : 소수 찾기(https://www.acmicpc.net/problem/2581)
    난이도 : 실버 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `64
65`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const start = parseInt(input());
const end = parseInt(input());
let min = Number.MAX_SAFE_INTEGER;
let sum = 0;

for (let i = start; i <= end; i++) {
  if (isPrime(i)) {
    sum += i;
    min = Math.min(min, i);
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
