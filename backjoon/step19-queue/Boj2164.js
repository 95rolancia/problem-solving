/*
    문제 : 카드 2 (https://www.acmicpc.net/problem/2164)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `6`).split(
  '\n'
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(Number);
let start = 0;
let end = N - 1;
const q = Array.from({ length: N }, (_, i) => i + 1);

while (start !== end) {
  start++;
  q.push(q[start++]);
  end++;
}

console.log(q[start]);
