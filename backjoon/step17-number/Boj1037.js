/*
    문제 : 약수 (https://www.acmicpc.net/problem/1037)
    난이도 : 실버 5
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
4 2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const cnt = +input();
const divider = input().split(' ').map(Number);
divider.sort((a, b) => a - b);
console.log(divider[0] * divider[divider.length - 1]);
