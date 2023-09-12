/**
 * 난이도 : Level 1
 * 키워드 : 구현
 */

function solution(park, routes) {
  const start = findStart(park);
  let cur = start.slice();
  routes.forEach((route) => {
    const [dir, len] = route.split(" ");
    cur = move(park, dir, +len, cur); // 현재 위치 갱신
  });
  return cur;
}

function move(park, dir, len, cur) {
  let [curX, curY] = cur.map(Number);

  switch (dir) {
    case "E":
      for (let i = curY; i <= curY + len; i++) {
        if (i >= park.length || park[curX][i] === "X") return cur;
      }
      return [curX, curY + len];
    case "W":
      for (let i = curY, j = len; j >= 0; i--, j--) {
        if (i < 0 || park[curX][i] === "X") return cur;
      }
      return [curX, curY - len];
    case "S":
      for (let i = curX; i <= curX + len; i++) {
        if (i >= park.length || park[i][curY] === "X") return cur;
      }
      return [curX + len, curY];
    case "N":
      for (let i = curX, j = len; j >= 0; i--, j--) {
        if (i < 0 || park[i][curY] === "X") return cur;
      }
      return [curX - len, curY];
  }
}

// 출발 지점을 찾는 함수
function findStart(park) {
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park.length; j++) {
      if (park[i][j] === "S") {
        return [i, j];
      }
    }
  }
}
