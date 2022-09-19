/*
    문제 : 동전 0 (https://www.acmicpc.net/problem/11047)
    난이도 : 실버 2
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(Number);
const coins = [];
for (let i = 0; i < N; i++) {
  coins.push(+input());
}

let result = 0;
let temp = K;
for (let i = coins.length - 1; i >= 0; i--) {
  if (coins[i] <= temp) {
    result += Math.floor(temp / coins[i]);
    temp %= coins[i];
  }
  if (temp === 0) break;
}

console.log(result);
