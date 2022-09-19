/*
    문제 : 스택 (https://www.acmicpc.net/problem/10773)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1
0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const stk = [];
for (let i = 0; i < N; i++) {
  const number = +input();
  if (number !== 0) {
    stk.push(number);
  } else {
    if (stk.length > 0) {
      stk.pop();
    }
  }
}

if (stk.length === 0) {
  console.log(0);
} else console.log(stk.reduce((a, b) => a + b));
