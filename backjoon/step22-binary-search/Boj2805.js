/*
    문제 : 나무 자르기 (https://www.acmicpc.net/problem/2805)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 7
20 15 10 17`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(Number);
const tree = input().split(' ').map(Number);
let max = -1;
tree.forEach((h) => {
  if (max < h) max = h;
});

console.log(upperBound(tree));

function upperBound(arr) {
  let start = 0;
  let end = max;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    let sum = 0;
    tree.forEach((h) => {
      if (h - mid > 0) sum += h - mid;
    });

    if (sum < M) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start - 1;
}
