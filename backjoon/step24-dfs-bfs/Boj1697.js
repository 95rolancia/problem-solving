/*
    문제 : 숨바꼭질 (https://www.acmicpc.net/problem/1697)
    난이도 : 실버 1
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 17`
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

const [N, K] = input().split(" ").map(Number);

console.log(bfs(N, 0));

function bfs() {
  const visited = Array(100001).fill(false);
  const q = new Queue();
  q.push([N, 0]);
  visited[N] = true;

  while(q.size > 0) {
    const [curX, time] = q.pop();

    if(curX === K) return time;

    let nextX = curX - 1;
    if(valid(nextX, visited)) {
      q.push([nextX, time + 1]);
      visited[nextX] = true;
    }

    nextX = curX + 1;
    if(valid(nextX, visited)) {
      q.push([nextX, time + 1]);
      visited[nextX] = true;
    }

    nextX = curX * 2;
    if(valid(nextX, visited)) {
      q.push([nextX, time + 1]);
      visited[nextX] = true;
    }
  }
}

function valid(x, visited) {
  if(x < 0 || x > 100000 || visited[x]) return false;
  return true;
}