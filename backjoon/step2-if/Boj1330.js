/*
    Backjoon 1330번 
    문제 : 두 수 비교하기 (https://www.acmicpc.net/problem/1330)
    난이도 : 브론즈 4
*/

const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `2541`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [A, B] = input().split(' ').map(Number);

if (A > B) {
  console.log('>');
} else if (A < B) {
  console.log('<');
} else {
  console.log('==');
}
