/*
    문제 : 스택 (https://www.acmicpc.net/problem/10828)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const stk = [];
let result = '';

for (let i = 0; i < N; i++) {
  const cmdSplit = input().split(' ');
  switch (cmdSplit[0]) {
    case 'push':
      stk.push(cmdSplit[1]);
      break;
    case 'pop':
      if (stk.length > 0) {
        result += stk[stk.length - 1] + '\n';
        stk.pop();
      } else {
        result += -1 + '\n';
      }
      break;
    case 'size':
      result += stk.length + '\n';
      break;
    case 'empty':
      if (stk.length === 0) result += 1 + '\n';
      else result += 0 + '\n';
      break;
    case 'top':
      if (stk.length > 0) {
        result += stk[stk.length - 1] + '\n';
      } else {
        result += -1 + '\n';
      }
      break;
    default:
      throw new Error();
  }
}

console.log(result);
