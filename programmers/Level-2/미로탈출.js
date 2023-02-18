/**
 * 난이도 : 2
 * 장르 : 최단 경로, bfs, 구현
 *
 * 가중치가 동일하므로 BFS를 사용
 * 1. 시작점에서 레버까지 최단 경로 길이 구하기
 * 2. 레버에서 끝점까지 최단 경로 길이 구하기
 * 3. 둘 중에 하나라도 null이라면 -1 반환 아니면 1, 2 더한 값을 반환
 */

function solution(maps) {
  let disToLever;
  let disToEnd;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") {
        disToLever = bfs(i, j, maps, "L");
      }

      if (maps[i][j] === "L") {
        disToEnd = bfs(i, j, maps, "E");
      }
    }
  }

  if (disToLever == null || disToEnd == null) return -1;
  return disToLever + disToEnd;
}

function bfs(x, y, maps, target) {
  const q = [[x, y, 0]];
  const visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );
  visited[x][y] = true;
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // up, down, left, right

  while (q.length > 0) {
    const [cx, cy, dis] = q.shift();
    console.log(cx, cy, dis);

    if (maps[cx][cy] === target) {
      return dis;
    }

    for (const [dr, dc] of dir) {
      const nr = cx + dr;
      const nc = cy + dc;
      if (nr < 0 || nc < 0 || nr >= maps.length || nc >= maps[0].length)
        continue;
      if (visited[nr][nc]) continue;
      if (maps[nr][nc] === "X") continue;
      visited[nr][nc] = true;
      q.push([nr, nc, dis + 1]);
    }
  }

  return null;
}
