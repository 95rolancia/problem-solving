/*
    Backjoon 2750번 
    문제 : 수 정렬하기 (https://www.acmicpc.net/problem/2750)
    난이도 : 브론즈 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
5
2
3
4
1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const arr = [];
const N = parseInt(input());

for (let i = 0; i < N; i++) {
  arr.push(parseInt(input()));
}
let arrLen;
// arr.sort((a, b) => a - b);
heapSort(arr);
console.log(arr.join("\n"));

function swap(input, i, j) {
  let temp = input[i];
  input[i] = input[j];
  input[j] = temp;
}

function heapRoot(input, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < arrLen && input[left] > input[max]) {
    max = left;
  }

  if (right < arrLen && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    heapRoot(input, max);
  }
}

function heapSort(input) {
  arrLen = input.length;

  for (let i = Math.floor(arrLen / 2); i >= 0; i--) {
    heapRoot(input, i);
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    arrLen--;

    heapRoot(input, 0);
  }
}

let nums = [1, 3, 5, 6, 2, 0, 8, 9, 7, 4];

heapSort(nums); // 힙 정렬 시행
console.log(nums);
