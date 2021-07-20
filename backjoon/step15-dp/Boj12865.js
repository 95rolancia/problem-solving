/*
    문제 : 평범한 배낭 (https://www.acmicpc.net/problem/12865)
    난이도 : 골드 5
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 7
6 13
4 8
3 6
5 12`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(Number);
let luggages = [[]];

for (let i = 0; i < N; i++) {
  const [weight, value] = input().split(' ').map(Number);
  luggages.push([weight, value]);
}

const dp = Array(K + 1).fill(0);

for (let i = 1; i <= N; i++) {
  for (let j = K; j - luggages[i][0] >= 0; j--) {
    dp[j] = Math.max(dp[j], dp[j - luggages[i][0]] + luggages[i][1]);
  }
}

console.log(dp[K]);
