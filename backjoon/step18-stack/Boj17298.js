/*
    문제 : 오큰수 (https://www.acmicpc.net/problem/17298)
    난이도 : 골드 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1
5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
let arr = input().split(' ').map(Number);
const stk = [];

for (let i = 0; i < N; i++) {
  while (stk.length > 0 && arr[stk[stk.length - 1]] < arr[i]) {
    arr[stk.pop()] = arr[i];
  }

  stk.push(i);
}

while (stk.length > 0) {
  arr[stk.pop()] = -1;
}

console.log(arr.join(' '));
