/*
    문제 : LCS (https://www.acmicpc.net/problem/9251)
    난이도 : 골드 5
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `ACAYKP
CAPCAK`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const memo = Array.from({ length: 55 }, () => Array.from({ length: 55 }, () => Array(55).fill(0)));
while (true) {
  const [a, b, c] = input().split(' ').map(Number);
  if (a === -1 && b === -1 && c === -1) break;
  console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }
  if (memo[a][b][c] !== 0) return memo[a][b][c];
  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20);
  }
  if (a < b && b < c) {
    memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return memo[a][b][c];
  }
  memo[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
  return memo[a][b][c];
}
