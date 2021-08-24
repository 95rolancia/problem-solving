/*
    문제 : 스택 수열 (https://www.acmicpc.net/problem/1874)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8
4
3
6
8
7
5
2
1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const stk = [];
let start = 1;
let result = '';
for (let i = 0; i < N; i++) {
  const num = +input();
  while (start <= num) {
    stk.push(start);
    result += '+\n';
    start++;
  }

  if (stk[stk.length - 1] === num) {
    stk.pop();
    result += '-\n';
  }
}

if (stk.length > 0) console.log('NO');
else console.log(result);
