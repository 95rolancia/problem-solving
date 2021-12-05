/*
    문제 : 미확인 도착지 (https://www.acmicpc.net/problem/9370)
    난이도 : 골드 2
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1
5 4 2
1 2 3
1 2 6
2 3 2
3 4 4
3 5 3
5
4`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0];

  insert = (key, value) => {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp(); // 배열에 가장 끝에 넣고, 다시 min heap 의 형태를 갖추도록 한다.
  };

  // 최근에 삽입된 노드가 제 자리를 찾아갈 수 있도록 하는 메소드
  heapifyUp = () => {
    let index = this.heap.length - 1; // 계속해서 변하는 index 값
    const lastInsertedNode = this.heap[index];

    // 루트노드가 되기 전까지
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 부모 노드의 key 값이 마지막에 삽입된 노드의 키 값 보다 크다면
      // 부모의 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    // break 를 만나서 자신의 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop(); // 끝에 있는 노드를 부모로 만들고
      this.heapifyDown(); // 다시 min heap 의 형태를 갖추도록 한다.
    }

    return rootNode;
  };

  // 변경된 루트노드가 제 자리를 찾아가도록 하는 메소드
  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    // 계속해서 left child 가 있을 때 까지 검사한다.
    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // 왼쪽, 오른쪽 중에 더 작은 노드를 찾는다
      // rightChild 가 있다면 key의 값을 비교해서 더 작은 값을 찾는다.
      // 없다면 leftChild 가 더 작은 값을 가지는 인덱스가 된다.
      const smallerChildIndex =
        rightChildIndex < count && this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      // 자식 노드의 키 값이 루트노드보다 작다면 위로 끌어올린다.
      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

const T = parseInt(input());

for (let tcCnt = 0; tcCnt < T; tcCnt++) {
  const [vertexCnt, edgeCnt, targetCnt] = input().split(' ').map(Number);
  const [start, g, h] = input().split(' ').map(Number);

  const graph = Array.from({ length: vertexCnt + 1 }, () => []);

  for (let i = 0; i < edgeCnt; i++) {
    const [from, to, weight] = input().split(' ').map(Number);
    graph[from].push([to, weight]);
    graph[to].push([from, weight]);
  }

  const target = [];
  for (let i = 0; i < targetCnt; i++) {
    target.push(parseInt(input()));
  }

  const d1 = Array(vertexCnt + 1).fill(Number.MAX_SAFE_INTEGER);
  dijkstra(start, d1, graph);
  const d2 = Array(vertexCnt + 1).fill(Number.MAX_SAFE_INTEGER);
  dijkstra(g, d2, graph);
  const d3 = Array(vertexCnt + 1).fill(Number.MAX_SAFE_INTEGER);
  dijkstra(h, d3, graph);

  target.sort((a, b) => a - b);

  let result = '';

  for (let i = 0; i < targetCnt; i++) {
    if (d1[g] + d2[h] + d3[target[i]] === d1[target[i]]) {
      result += target[i] + ' ';
    } else if (d1[h] + d3[g] + d2[target[i]] === d1[target[i]]) {
      result += target[i] + ' ';
    }
  }

  console.log(result);
}

function dijkstra(start, d, graph) {
  const pq = new PriorityQueue();
  pq.enqueue(0, start);
  d[start] = 0;

  while (!pq.isEmpty()) {
    const dis = pq.peek().key;
    const cur = pq.peek().value;
    pq.dequeue();

    if (dis > d[cur]) continue;

    for (const nextNode of graph[cur]) {
      let next = nextNode[0];
      let nextDis = dis + nextNode[1];

      if (nextDis < d[next]) {
        d[next] = nextDis;
        pq.enqueue(nextDis, next);
      }
    }
  }
}
