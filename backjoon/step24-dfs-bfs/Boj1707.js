/*
    문제 : 이분 그래프 (https://www.acmicpc.net/problem/1707)
    난이도 : 골드 4
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`
).split("\n");

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

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const T = parseInt(input());

for(let tcCnt = 0; tcCnt < T; tcCnt++) {
  const [V, E] = input().split(" ").map(Number);
  const graph = Array.from({length: V + 1}, () => []);

  for(let i = 0; i < E; i++) {
    const [from, to] = input().split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  const visited = Array(V + 1).fill(-1)

  for(let i = 1; i <= V; i++) {
    if(visited[i] === -1) {
      bfs(i, graph, visited, 1);
    }
  }

  if(checkGraph(graph, V, visited)) {
    console.log('YES');
  } else {
    console.log('NO')
  }
}

function bfs(start, graph, visited, value) {
  const q = new Queue();
  q.push(start);
  visited[start] = value;

  while(q.size > 0) {
    const cur = q.pop();
    for(const next of graph[cur]) {
      if(visited[next] === -1) {
        const nextValue = visited[cur] === 1 ? 0 : 1;
        q.push(next)
        visited[next] = nextValue;
      }
    }
  }
} 

function checkGraph(graph, V, visited) {
  for(let i = 1; i <= V; i++) {
    for(const next of graph[i]) {
      if(visited[i] === visited[next]) {
        return false;
      }
    }
  }
  return true;
}