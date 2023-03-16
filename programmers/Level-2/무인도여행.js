/**
 * 난이도 : Level 2
 * 키워드 : dfs
 */

function solution(maps) {
  var answer = [];
  const visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") {
        let sum = { cnt: +maps[i][j] };
        dfs(i, j, sum, visited, maps);
        answer.push(sum.cnt);
      }
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

function dfs(x, y, sum, visited, maps) {
  visited[x][y] = true;
  const neighbors = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ];
  for (const [nx, ny] of neighbors) {
    if (nx >= maps.length || ny >= maps[0].length || nx < 0 || ny < 0) continue;
    if (visited[nx][ny] || maps[nx][ny] === "X") continue;

    sum.cnt += +maps[nx][ny];
    dfs(nx, ny, sum, visited, maps);
  }
}
