/*
    문제 : 최대 힙 (https://www.acmicpc.net/problem/11279)
    난이도 : 실버 2
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `13
0
1
2
0
0
3
2
1
0
0
0
0
0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const heap = [];
let heapCnt = 0;
let answer = '';

for (let i = 0; i < N; i++) {
  const cmd = +input();
  if (cmd === 0) {
    pop();
  } else {
    push(cmd);
  }
}

console.log(answer);

function push(data) {
  heap[++heapCnt] = data;
  let child = heapCnt;
  let parent = Math.floor(child / 2);
  while (child > 1 && heap[parent] < heap[child]) {
    swap(heap, parent, child);
    child = parent;
    parent = Math.floor(child / 2);
  }
}

function pop() {
  if (heapCnt === 0) {
    answer += '0\n';
    return;
  }
  let result = heap[1];
  swap(heap, 1, heapCnt);
  heapCnt--;

  let parent = 1;
  let child = parent * 2;

  if (child + 1 <= heapCnt) {
    child = heap[child] > heap[child + 1] ? child : child + 1;
  }

  while (child <= heapCnt && heap[parent] < heap[child]) {
    swap(heap, parent, child);

    parent = child;
    child = parent * 2;
    if (child + 1 <= heapCnt) {
      child = heap[child] > heap[child + 1] ? child : child + 1;
    }
  }

  answer += `${result}\n`;
  return;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
