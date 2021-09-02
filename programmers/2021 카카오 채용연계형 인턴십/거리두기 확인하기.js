function solution(places) {
  let answer = [];
  places.forEach((place) => {
    if (checkPlace(place)) answer.push(1);
    else answer.push(0);
  });
  return answer;
}

function checkPlace(place) {
  for (let i = 0; i < place.length; i++) {
    for (let j = 0; j < place[i].length; j++) {
      if (place[i][j] === 'P') {
        if (checkIsSafe(place, i, j)) continue;
        else return false;
      }
    }
  }
  return true;
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function checkIsSafe(place, a, b) {
  const visited = Array.from({ length: 5 }, () => new Array(5).fill(false));
  let q = [];
  q.push([a, b, false]);
  visited[a][b] = true;

  while (q.length !== 0) {
    const [x, y, z] = q.shift();
    for (let i = 0; i < 4; i++) {
      const mx = x + dx[i];
      const my = y + dy[i];
      if (mx < 0 || my < 0 || mx > 4 || my > 4 || visited[mx][my]) continue;
      if (getDis(a, b, mx, my) > 2) continue;

      if (place[mx][my] === 'P') {
        if (z === false) return false;
      } else if (place[mx][my] === 'X') {
        q.push([mx, my, true]);
      } else if (place[mx][my] === 'O') {
        q.push([mx, my, false]);
      }
      visited[mx][my] = true;
    }
  }
  return true;
}

function getDis(x, y, i, j) {
  return Math.abs(x - i) + Math.abs(y - j);
}
