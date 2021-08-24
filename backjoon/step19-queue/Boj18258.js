/*
    문제 : 큐 2 (https://www.acmicpc.net/problem/18258)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `15
push 1
push 2
front
back
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
front`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
let start = 0;
let end = 0;
const q = Array(2000001).fill(-1);
let result = '';

for (let i = 0; i < N; i++) {
  const cmdSplit = input().split(' ');
  switch (cmdSplit[0]) {
    case 'push':
      q[end++] = cmdSplit[1];
      break;
    case 'pop':
      if (start === end) {
        result += `-1\n`;
      } else {
        result += q[start++] + '\n';
      }
      break;
    case 'size':
      result += end - start + '\n';
      break;
    case 'empty':
      if (end === start) result += 1 + '\n';
      else result += 0 + '\n';
      break;
    case 'front':
      if (end === start) {
        result += -1 + '\n';
      } else {
        result += q[start] + '\n';
      }
      break;
    case 'back':
      if (end === start) {
        result += -1 + '\n';
      } else {
        result += q[end - 1] + '\n';
      }
      break;
    default:
      throw new Error();
  }
}

console.log(result);
