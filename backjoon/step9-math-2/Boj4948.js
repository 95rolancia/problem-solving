/*
    Backjoon 4948번 
    문제 : 소인수분해(https://www.acmicpc.net/problem/4948)
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

let prime = Array(250000).fill(true);

prime[0] = prime[1] = false;
for (let i = 2; i * i <= 250000; i++) {
  if (prime[i] === true) {
    for (let j = i * 2; j <= 250000; j += i) {
      prime[j] = false;
    }
  }
}

while (true) {
  const n = parseInt(input());
  if (n === 0) break;
  let answer = 0;
  for (let i = n + 1; i <= 2 * n; i++) {
    if (prime[i] === true) answer++;
  }
  console.log(answer);
}
