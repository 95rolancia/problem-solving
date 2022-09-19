/*
    문제 : 최대공약수와 최소공배수 (https://www.acmicpc.net/problem/2609)
    난이도 : 실버 5
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `24 18`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [a, b] = input().split(' ').map(Number);

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

let gcdValue = gcd(a, b);

console.log(gcdValue);
console.log((a * b) / gcdValue);
