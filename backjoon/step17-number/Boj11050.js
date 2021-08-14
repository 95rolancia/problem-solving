/*
    문제 : 이항 계수 1 (https://www.acmicpc.net/problem/11050)
    난이도 : 브론즈 1
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `1 0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(Number);

console.log(factorial(N) / (factorial(K) * factorial(N - K)));

function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}
