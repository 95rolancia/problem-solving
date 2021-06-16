/*
    Backjoon 9020번 
    문제 : 골드바흐의 추측(https://www.acmicpc.net/problem/9020)
    난이도 : 실버 1
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

let prime = Array(10000).fill(true);

prime[0] = prime[1] = false;
for (let i = 2; i * i <= 10000; i++) {
  if (prime[i] === true) {
    for (let j = i * 2; j <= 10000; j += i) {
      prime[j] = false;
    }
  }
}

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
