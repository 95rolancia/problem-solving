// Level - 3 (https://programmers.co.kr/learn/courses/30/lessons/49189)
// 핵심 키워드는 "노드", "간선", "최단경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []);

  edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  // 정점 1부터 각 정점까지의 거리를 저장하는 배열
  const dis = Array(n + 1).fill(0);
  const q = new Queue();
  q.enqueue(1);
  dis[1] = 1;
  let maxDis = Number.MIN_SAFE_INTEGER;

  while (!q.isEmpty()) {
    const cur = q.dequeue();
    for (const next of graph[cur]) {
      if (dis[next] === 0) {
        q.enqueue(next);
        dis[next] = dis[cur] + 1;
        maxDis = Math.max(maxDis, dis[next]);
      }
    }
  }
  return dis.filter((d) => d === maxDis).length;
}

class Queue {
  constructor() {
    this.q = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.q[this.rear++] = value;
  }

  dequeue() {
    const value = this.q[this.front];
    delete this.q[this.front];
    this.front += 1;
    return value;
  }
  isEmpty() {
    return this.rear === this.front;
  }
}
