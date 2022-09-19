/*
    문제 : 주유소 (https://www.acmicpc.net/problem/13305)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4
3 3 4
1 1 1 1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const dis = input().split(' ').map(BigInt);
const cost = input().split(' ').map(BigInt);
let result = 0n;
let curCost = cost[0];
for (let i = 1; i < cost.length; i++) {
  result += curCost * dis[i - 1];
  if (cost[i] < curCost) {
    curCost = cost[i];
  }
}

console.log(result + '');
