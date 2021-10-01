/*
    문제 : 랜선 자르기 (https://www.acmicpc.net/problem/1654)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 11
802
743
457
539`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(Number);
const line = [];
for (let i = 0; i < N; i++) {
  line.push(+input());
}

const max = Math.max(...line);
console.log(upperBound(line));

function upperBound(arr) {
  let start = 0;
  let end = max + 1;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (check(mid, arr)) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start - 1;
}

function check(len, arr) {
  let result = 0;
  arr.forEach((e) => {
    result += parseInt(e / len);
  });
  if (result < M) return true;
  else return false;
}
