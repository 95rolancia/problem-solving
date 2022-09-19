/*
    문제 : 최소공배수 (https://www.acmicpc.net/problem/1934)
    난이도 : 브론즈 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
1 45000
6 10
13 17`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = [];

for (let i = 0; i < N; i++) {
  const [a, b] = input().split(' ').map(Number);
  console.log((a * b) / gcd(a, b));
}

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}
