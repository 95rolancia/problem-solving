function solution(n, results) {
  const INF = Number.MAX_SAFE_INTEGER;
  const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(INF));

  results.forEach((result) => {
    const [winner, loser] = result;
    graph[winner][loser] = 1;
    graph[loser][winner] = -1;
  });

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  const d = graph.slice();

  for (let stopover = 1; stopover <= n; stopover++) {
    for (let from = 1; from <= n; from++) {
      for (let to = 1; to <= n; to++) {
        if (from === to || d[from][to] !== INF) continue;

        if (d[from][stopover] === 1 && d[stopover][to] === 1) {
          d[from][to] = 1;
        } else if (d[from][stopover] === -1 && d[stopover][to] === -1) {
          d[from][to] = -1;
        }
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j <= n; j++) {
      if (d[i][j] === INF || d[i][j] === 0) {
        cnt++;
      }
    }
    if (cnt === 1) answer++;
  }

  return answer;
}
