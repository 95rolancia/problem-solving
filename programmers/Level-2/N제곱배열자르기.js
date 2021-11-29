// https://programmers.co.kr/learn/courses/30/lessons/12913

solution(4, 7, 5);

function solution(n, left, right) {
  const answer = [];

  let startX = Math.floor(left / n);
  let startY = left % n;

  const endX = Math.floor(right / n);
  const endY = right % n;

  while (true) {
    if (startX === startY) {
      answer.push(startX + 1);
    } else {
      answer.push(Math.max(startX, startY) + 1);
    }

    if (startX === endX && startY === endY) break;

    if (startY + 1 >= n) {
      startY = 0;
      startX++;
    } else {
      startY++;
    }
  }

  return answer;
}
