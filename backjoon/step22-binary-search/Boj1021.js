/*
    문제 : 수 찾기 (https://www.acmicpc.net/problem/1920)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
4 1 5 2 3
5
1 3 7 9 5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arrN = input().split(' ').map(Number);

const M = +input();
const arrM = input().split(' ').map(Number);

const sortedArrN = arrN.sort((a, b) => a - b);
arrM.forEach((e) => {
  if (binarySearch(e, sortedArrN)) console.log(1);
  else console.log(0);
});

function binarySearch(number, arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === number) return true;
    else if (arr[mid] < number) {
      start = mid + 1;
    } else if (arr[mid] > number) {
      end = mid - 1;
    }
  }
  return false;
}
