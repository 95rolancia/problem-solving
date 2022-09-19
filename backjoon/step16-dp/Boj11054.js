/*
    문제 : 가장 긴 바이토닉 부분 수열 (https://www.acmicpc.net/problem/11054)
    난이도 : 골드 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10
1 5 2 1 4 3 4 5 2 1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = input().split(' ').map(Number);

const dp1 = Array(N).fill(1);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp1[i] = Math.max(dp1[j] + 1, dp1[i]);
    }
  }
}

const arr2 = arr.reverse();
const dp2 = Array(N).fill(1);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr2[j] < arr2[i]) {
      dp2[i] = Math.max(dp2[j] + 1, dp2[i]);
    }
  }
}

const result = dp1.map((a, i) => a + dp2[dp2.length - i - 1] - 1);
console.log(Math.max(...result));
