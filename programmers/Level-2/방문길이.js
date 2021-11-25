// https://programmers.co.kr/learn/courses/30/lessons/49994
function solution(dirs) {
  let answer = 0;

  const dirDict = {
      'U': [-1, 0, 0, 1],
      'D': [1, 0, 1, 0],
      'L': [0, -1, 2, 3],
      'R': [0, 1, 3, 2]
  }
  
  const visited = Array.from({length: 11}, () => Array.from({length: 11}, () => Array(4).fill(false)));
  let row = 5;
  let col = 5;
  Array.from(dirs).forEach((dir) => {
      const [dx, dy, dirType, reverseDir] = dirDict[dir];
      if(row + dx > 10 || col + dy > 10 || row + dx < 0 || col + dy < 0) return;
      if(!visited[row][col][dirType]) {
          visited[row][col][dirType] = true;
          visited[row + dx][col + dy][reverseDir] = true;
          answer++;
      }    
      row += dx;
      col += dy;
  })
  return answer
}