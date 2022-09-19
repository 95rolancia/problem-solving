/*
    문제 : 덱 (https://www.acmicpc.net/problem/10866)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const q = Array(20001).fill(-1);
let start = 10000;
let end = 10000;
let result = '';
for (let i = 0; i < N; i++) {
  const cmdSplit = input().split(' ');
  switch (cmdSplit[0]) {
    case 'push_back':
      q[end++] = cmdSplit[1];
      break;
    case 'push_front':
      q[--start] = cmdSplit[1];
      break;
    case 'pop_front':
      if (start === end) {
        result += -1 + '\n';
      } else {
        result += q[start++] + '\n';
      }
      break;
    case 'pop_back':
      if (start === end) {
        result += -1 + '\n';
      } else {
        result += q[--end] + '\n';
      }
      break;
    case 'size':
      result += end - start + '\n';
      break;
    case 'empty':
      if (start === end) result += 1 + '\n';
      else result += 0 + '\n';
      break;
    case 'front':
      if (start === end) result += -1 + '\n';
      else result += q[start] + '\n';
      break;
    case 'back':
      if (start === end) result += -1 + '\n';
      else result += q[end - 1] + '\n';
      break;
    default:
      throw new Error();
  }
}

console.log(result);
