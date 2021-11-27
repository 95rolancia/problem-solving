/*
    문제 : 벽 부수고 이동하기 (https://www.acmicpc.net/problem/2206)
    난이도 : 골드 4
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 10
0000011000
1101011010
0000000010
1111111110
1111000000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class Queue {
  constructor() {
      this._head = null;
      this._tail = null;
      this.size = 0;
  }

  _createNode(value, prev, next) {
      return {
          value,
          prev,
          next
      };
  }

  push(value) {
      const curNode = this._createNode(value, this._tail, this._head);
      if (this._head) {
          this._tail.next = curNode;
          this._head.prev = curNode;
          this._tail = curNode;
      } else {
          this._head = curNode;
          this._tail = curNode;
          curNode.prev = curNode;
          curNode.next = curNode;
      }
      this.size++;
  }

  pop() {
      if (this.size > 2) {
          const value = this._head.value;
          const newHead = this._head.next;
          this._head = newHead;
          newHead.prev = this._tail;
          this._tail.next = this._head;
          this.size--;
          return value;
      } else if (this.size === 2) {
          const value = this._head.value;
          this._head = this._tail;
          this._tail.prev = this._tail;
          this._tail.next = this._tail;
          this.size--;
          return value;
      } else if (this.size === 1) {
          const value = this._head.value;
          this._head = null;
          this._tail = null;
          this.size--;
          return value;
      } else {
          return -1;
      }
  }

  empty() {
      return this.size ? 0 : 1;
  }

  front() {
      return this._head ? this._head.value : -1;
  }

  back() {
      return this._tail ? this._tail.value : -1;
  }
}


const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const [N, M] = input().split(" ").map(Number);
const map = [];

for(let i = 0; i < N; i++) {
  map.push(input().split("").map((v) => {
    if(v === '1') return parseInt(-1);
    return parseInt(v);
  }));
}

console.log(bfs());

function bfs() {
  const visited = Array.from({length: N}, () => Array.from({length: M}, () => Array(2).fill(false)));
  const q = new Queue();
  q.push([0, 0, 1, false]);
  visited[0][0][0] = 1;

  while(q.size > 0) {
    const [curX, curY, dis, destroy] = q.pop();

    if(curX === N - 1 && curY === M - 1) {
      return dis;
    }

    for(let i = 0; i < 4; i++) {
      const nextX = curX + dx[i];
      const nextY = curY + dy[i];

      if(nextX >= N || nextX < 0 || nextY >= M || nextY < 0) continue;

      if(map[nextX][nextY] === -1 && !destroy) {
        q.push([nextX, nextY, dis + 1, true])
        visited[nextX][nextY][1] = true
        map[nextX][nextY] = map[curX][curY] + 1;
      } 
      
      if(map[nextX][nextY] === 0) {
        if(!destroy && !visited[nextX][nextY][0]) {
          q.push([nextX, nextY, dis + 1, false]);
          visited[nextX][nextY][0] = true;
        } else if(destroy && !visited[nextX][nextY][1]) {
          q.push([nextX, nextY, dis + 1, true]);
          visited[nextX][nextY][1] = true;
        }
      }
    }
  }
  return -1;
}