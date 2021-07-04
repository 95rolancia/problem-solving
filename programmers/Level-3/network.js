// bfs
function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    bfs(i);
  }

  function bfs(start) {
    if (visited[start]) return;
    let q = [];
    q.push(start);
    visited[start] = true;

    while (q.length > 0) {
      const cur = q.shift();
      for (let i = 0; i < n; i++) {
        if (cur !== i && computers[cur][i] === 1 && !visited[i]) {
          q.push(i);
          visited[i] = true;
        }
      }
    }
    answer++;
  }
  return answer;
}

// dfs
function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  function dfs(start) {
    visited[start] = true;
    for (let i = 0; i < n; i++) {
      if (start !== i && computers[start][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }
  return answer;
}
