/*
    문제 : 회전하는 큐 (https://www.acmicpc.net/problem/1021)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `32 6
27 16 30 11 6 23`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(Number);
const targets = input().split(' ').map(Number);
const q = Array.from({ length: N }, (_, i) => i + 1);

let result = 0;

for (let i = 0; i < targets.length; i++) {
  const target = targets[i];
  let halfIdx = -1;

  if (q.length % 2 === 0) {
    halfIdx = Math.floor(q.length / 2) - 1;
  } else {
    halfIdx = Math.floor(q.length / 2);
  }

  if (q.indexOf(target) > halfIdx) {
    let cnt = 0;
    while (q[0] !== target) {
      q.unshift(q.pop());
      cnt++;
    }
    q.shift();
    result += cnt;
  } else {
    let cnt = 0;
    while (q[0] !== target) {
      q.push(q.shift());
      cnt++;
    }
    q.shift();
    result += cnt;
  }
}

console.log(result);
