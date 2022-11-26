/*
    Backjoon 1978번 
    문제 : 소수 찾기(https://www.acmicpc.net/problem/1978)
    난이도 : 실버 5
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

let N = parseInt(input());
let answer = input().split(" ").map(Number).filter(isPrimeNumber);
console.log(answer);

/**
 * 주어진 숫자가 소수인지 판별하는 함수
 * @param {number} number
 * @returns {boolean}
 */
function isPrimeNumber(number) {
  if (number < 2) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
