/*
    문제 : 토마토 (https://www.acmicpc.net/problem/7576)
    난이도 : 실버 1
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2 2
1 -1
-1 1`
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
let result = 0;

for(let i = 0; i < M; i++) {
  map.push(input().split(" ").map(Number));
}

const visited = Array.from({ length: M }, () => Array(N).fill(false));

let day = -1;

bfs();
if(!checkMap(map)) console.log(-1);
else console.log(day)

/*BFS */
function bfs() {
  const q = new Queue();

  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(map[i][j] === 1) {
        q.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  while (q.size > 0) {
    let qSize = q.size;
    while(qSize > 0) {
      const [curX, curY] = q.front();
      q.pop();
      qSize--;

      for (let i = 0; i < 4; i++) {
        const nextX = curX + dx[i];
        const nextY = curY + dy[i];
        if (nextX < 0 || nextY < 0 || nextX >= M || nextY >= N) continue;
        if (visited[nextX][nextY]) continue;
        if (map[nextX][nextY] === 0) {
          q.push([nextX, nextY]);
          visited[nextX][nextY] = true;
          map[nextX][nextY] = 1;
        }
      }
    }
    day++;
  }
}

function checkMap() {
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(map[i][j] === 0) return false;
    }
  }
  return true;
}
