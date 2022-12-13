/*
    Backjoon 9020번 
    문제 : 골드바흐의 추측(https://www.acmicpc.net/problem/9020)
    난이도 : 실버 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
8
10
16`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let prime = getPrimeArr(10001);

let tcCnt = parseInt(input());
for (let tc = 0; tc < tcCnt; tc++) {
  const N = parseInt(input());
  for (let i = parseInt(N / 2); i > 0; i--) {
    if (prime[i] && prime[N - i]) {
      console.log(i, N - i);
      break;
    }
  }
}

/**
 * @description 에라토스테네스의 체
 * @param {number} to
 * @returns {number[]} result
 */
function getPrimeArr(to) {
  const result = Array(to + 1).fill(true);
  result[0] = result[1] = false;
  for (let i = 2; i * i < result.length; i++) {
    if (!result[i]) continue;
    for (let j = i * i; j < result.length; j += i) {
      result[j] = false;
    }
  }

  return result;
}
