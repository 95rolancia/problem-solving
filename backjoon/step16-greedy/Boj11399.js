/*
    문제 : ATM (https://www.acmicpc.net/problem/11399)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
3 1 4 3 2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const cost = input().split(' ').map(Number);

cost.sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    result += cost[j];
  }
}

console.log(result);
