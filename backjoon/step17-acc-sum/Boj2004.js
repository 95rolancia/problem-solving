/*
    문제 : 이항 계수 2 (https://www.acmicpc.net/problem/11051)
    난이도 : 실버 1
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `25 12`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(Number);
const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

const a = get_power(N, 5) - get_power(N - K, 5) - get_power(K, 5);
const b = get_power(N, 2) - get_power(N - K, 2) - get_power(K, 2);
console.log(Math.min(a, b));

function get_power(n, i) {
  let result = 0;
  while (n > 0) {
    result += parseInt(n / i);
    n = parseInt(n / i);
  }
  return result;
}
