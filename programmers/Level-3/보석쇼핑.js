// 난이도: Level 3
// 장르: 투포인터

function solution(gems) {
  let answer = [0, gems.length];
  // 1 <= 보석의 숫자 <= 100,000
  const gemTypeCnt = new Set(gems).size;
  let map = new Map();
  map.set(gems[0], 1);

  let left = 0;
  let right = 0;

  while (true) {
    // 루프 종료 조건: left, right 중 하나라도 gems의 길이를 넘어설 때
    if (right >= gems.length || left >= gems.length) {
      break;
    }

    if (map.size === gemTypeCnt) {
      // 최소 길이 구간 갱신
      if (right - left < answer[1] - answer[0]) {
        answer = [left + 1, right + 1];
      }

      map.set(gems[left], map.get(gems[left]) - 1);

      if (map.get(gems[left]) === 0) {
        map.delete(gems[left]);
      }

      left += 1;
    } else {
      right += 1;
      map.set(gems[right], (map.get(gems[right]) || 0) + 1);
    }
  }
  return answer;
}
