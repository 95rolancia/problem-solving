/*
    문제 : 요세푸스 문제 0 (https://www.acmicpc.net/problem/11866)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `7 3`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(Number);
const q = Array.from({ length: N }, (_, i) => i + 1);
let pointer = 0;
let result = [];

while (q.length !== 0) {
  result.push(q.splice((pointer + K - 1) % q.length, 1));
  pointer = (pointer + K - 1) % (q.length + 1);
}

console.log('<' + result.join(', ') + '>');
