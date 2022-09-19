/*
    문제 : 가운데를 말해요(https://www.acmicpc.net/problem/1655)
    난이도 : 골드 2
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7
1
5
2
10
-99
7
5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();

const minHeap = [];
let minHeapCnt = 0;

const maxHeap = [];
let maxHeapCnt = 0;

let answer = '';

for (let i = 0; i < N; i++) {
  const curNumber = +input();

  if (minHeapCnt === maxHeapCnt) {
    maxHeapPush(curNumber);
  } else {
    minHeapPush(curNumber);
  }

  if (minHeapCnt > 0 && maxHeapCnt > 0 && minHeap[1] < maxHeap[1]) {
    maxHeapPush(minHeapPop());
    minHeapPush(maxHeapPop());
  }

  answer += `${maxHeap[1]}\n`;
}

console.log(answer);

function minHeapPush(data) {
  minHeap[++minHeapCnt] = data;
  let child = minHeapCnt;
  let parent = Math.floor(child / 2);
  while (child > 1 && minHeap[parent] > minHeap[child]) {
    swap(minHeap, parent, child);
    child = parent;
    parent = Math.floor(child / 2);
  }
}

function minHeapPop() {
  if (minHeapCnt === 0) {
    return;
  }
  let result = minHeap[1];
  swap(minHeap, 1, minHeapCnt);
  minHeapCnt--;

  let parent = 1;
  let child = parent * 2;

  if (child + 1 <= minHeapCnt) {
    child = minHeap[child] < minHeap[child + 1] ? child : child + 1;
  }

  while (child <= minHeapCnt && minHeap[parent] > minHeap[child]) {
    swap(minHeap, parent, child);

    parent = child;
    child = parent * 2;
    if (child + 1 <= minHeapCnt) {
      child = minHeap[child] < minHeap[child + 1] ? child : child + 1;
    }
  }

  return result;
}

function maxHeapPush(data) {
  maxHeap[++maxHeapCnt] = data;
  let child = maxHeapCnt;
  let parent = Math.floor(child / 2);
  while (child > 1 && maxHeap[parent] < maxHeap[child]) {
    swap(maxHeap, parent, child);
    child = parent;
    parent = Math.floor(child / 2);
  }
}

function maxHeapPop() {
  if (maxHeapCnt === 0) {
    return;
  }
  let result = maxHeap[1];
  swap(maxHeap, 1, maxHeapCnt);
  maxHeapCnt--;

  let parent = 1;
  let child = parent * 2;

  if (child + 1 <= maxHeapCnt) {
    child = maxHeap[child] > maxHeap[child + 1] ? child : child + 1;
  }

  while (child <= maxHeapCnt && maxHeap[parent] < maxHeap[child]) {
    swap(maxHeap, parent, child);

    parent = child;
    child = parent * 2;
    if (child + 1 <= maxHeapCnt) {
      child = maxHeap[child] > maxHeap[child + 1] ? child : child + 1;
    }
  }

  return result;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
