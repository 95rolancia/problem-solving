/*
    문제 : 링 (https://www.acmicpc.net/problem/3036)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
12 1 24`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const rings = input().split(' ').map(Number);

let firstRing = rings[0];
for (let i = 1; i < N; i++) {
  let nextRing = rings[i];
  let gcdValue = gcd(firstRing, nextRing);
  console.log(firstRing / gcdValue + '/' + nextRing / gcdValue);
}

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}
