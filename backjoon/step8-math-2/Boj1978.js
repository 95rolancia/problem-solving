/*
    Backjoon 1978번 
    문제 : 소수 찾기(https://www.acmicpc.net/problem/1978)
    난이도 : 실버 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
1 3 5 7`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = input().split(" ").map(Number);

let answer = 0;
arr.forEach((number) => {
  if (isPrime(number)) answer++;
});

function isPrime(number) {
  if (number === 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(answer);
