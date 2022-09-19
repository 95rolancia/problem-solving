/*
    문제 : 나이트의 이동 (https://www.acmicpc.net/problem/7562)
    난이도 : 실버 1
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `8
0 0
7 0`
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

const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
const dy = [-2, -1, 1, 2, 2, 1, -1, -2];

// const T = parseInt(input());

for(let tcCnt = 1; tcCnt < 2; tcCnt++) {
  const mapSize = parseInt(input());
  const [curX, curY] = input().split(" ").map(Number);
  const [targetX, targetY] = input().split(" ").map(Number);

  console.log(bfs(curX, curY, targetX, targetY, mapSize))
}

function bfs(x, y, targetX, targetY, mapSize) {
  const visited = Array.from({length: mapSize}, () => new Array(mapSize).fill(false))
  const q = new Queue();
  q.push([x, y, 0]);
  visited[x][y] = true;

  while(q.size > 0) {
    const [curX, curY, dis] = q.pop();
    if(curX === targetX && curY === targetY) return dis;

    for(let i = 0; i < 8; i++) {
      const nextX = curX + dx[i];
      const nextY = curY + dy[i];
      if(nextX >= mapSize || nextX < 0 || nextY >= mapSize || nextY < 0) continue;
      if(!visited[nextX][nextY]) {
        q.push([nextX, nextY, dis + 1]);
        visited[nextX][nextY] = true;
      }
    }
  }
}