/*
    Backjoon 4948번 
    문제 : 베르트랑 공준(https://www.acmicpc.net/problem/4948)
    난이도 : 실버 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1
10
13
100
1000
10000
100000
0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let primeArr = getPrimeNumArr(250000);

while (true) {
  const n = parseInt(input());
  if (n === 0) break;
  let answer = primeArr.filter((v) => v > n && v <= 2 * n).length;
  console.log(answer);
}

/**
 * @description 에라토스테네스의 체에서 소수들을 원소로 가지는 배열
 * @param {number} to
 * @returns {boolean[]} result
 */
function getPrimeNumArr(to) {
  const result = Array(to + 1).fill(true);
  result[0] = result[1] = false;
  for (let i = 2; i * i < result.length; i++) {
    if (!result[i]) continue;
    for (let j = i * i; j < result.length; j += i) {
      result[j] = false;
    }
  }

  return result.map((v, idx) => (v ? idx : null)).filter((v) => v);
}
