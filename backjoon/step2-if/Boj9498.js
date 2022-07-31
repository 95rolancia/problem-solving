/*
    Backjoon 9498번 
    문제 : 두 수 비교하기 (https://www.acmicpc.net/problem/9498)
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

const score = parseInt(input());

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}
