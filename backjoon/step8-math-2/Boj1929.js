/*
    Backjoon 1929번 
    문제 : 소수 구하기(https://www.acmicpc.net/problem/1929)
    난이도 : 실버 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `3 16`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(" ").map(Number);
let prime = Array(M + 1).fill(true);

prime[0] = prime[1] = false;
for (let i = 2; i * i <= M; i++) {
  if (prime[i] === true) {
    for (let j = i * 2; j <= M; j += i) {
      prime[j] = false;
    }
  }
}

let result = "";
for (let i = N; i <= M; i++) {
  if (prime[i] === true) {
    result += i + "\n";
  }
}

console.log(result);
