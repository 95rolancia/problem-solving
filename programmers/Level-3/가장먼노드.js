// https://programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edges) {
  let answer = 0;

  const graph = Array.from({ length: n + 1 }, () => []);

  edges.forEach((edge) => {
    const [from, to] = edge;
    graph[from].push(to);
    graph[to].push(from);
  });

  return bfs();

  function bfs() {
    const visited = Array(n + 1).fill(-1);
    const q = [1];
    visited[1] = 0;
    let maxDis = -1;

    while (q.length > 0) {
      const cur = q.shift();
      for (const next of graph[cur]) {
        if (visited[next] === -1) {
          q.push(next);
          visited[next] = visited[cur] + 1;
          maxDis = Math.max(maxDis, visited[next]);
        }
      }
    }
    return visited.filter((dis) => dis === maxDis).length;
  }
}
