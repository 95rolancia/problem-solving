/*
    문제 : 링 (https://www.acmicpc.net/problem/3036)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
6  
36  
216`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(+input());
}

arr.sort((a, b) => b - a);

let gcdValue = arr[0] - arr[1];
for (let i = 1; i < arr.length - 1; i++) {
  gcdValue = gcd(gcdValue, arr[i] - arr[i + 1]);
}

let answer = '';
for (let i = 2; i <= gcdValue; i++) {
  if (gcdValue % i === 0) answer += i + ' ';
}

console.log(answer);

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}
