/*
    문제 : 회의실 배정 (https://www.acmicpc.net/problem/1931)
    난이도 : 실버 2
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
7 8
8 8`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const reserve = [];
let answer = 1;

for (let i = 0; i < N; i++) {
  const [start, end] = input().split(' ').map(Number);
  reserve.push([start, end]);
}

reserve.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[1];
  }
  return a[1] - b[1];
});

let temp = [];
temp.push(reserve[0]);

for (let i = 1; i < N; i++) {
  if (reserve[i][0] >= temp[temp.length - 1][1]) {
    answer++;
    temp.push(reserve[i]);
  }
}

console.log(answer);
