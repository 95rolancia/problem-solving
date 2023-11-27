// weights의 최대 길이 10만
// 완전탐색 100,000 * 100,000 = 10,000,000,000 -> 100억으로 불가능
// O(n log n) 이하로 풀어야 함!
// 1:1 / 1:2 / 2:3 / 3:4
// 풀이: 작은 것부터 순회하며 map안에 비율이 맞는 짝을 찾기
// map에는 각 weight의 개수를 카운팅한다.

function solution(weights) {
  let answer = 0;
  weights.sort((a, b) => a - b); // 오름차순 정렬

  const map = new Map();
  weights.forEach((weight) => {
    if (map.get(weight)) answer += map.get(weight * 1); // 1:1의 거리
    if (map.get(weight / 2)) answer += map.get((weight * 1) / 2); // 1:2의 거리
    if (map.get((weight * 2) / 3)) answer += map.get((weight * 2) / 3); // 2:3의 거리
    if (map.get((weight * 3) / 4)) answer += map.get((weight * 3) / 4); // 3:4의 거리
    map.set(weight, (map.get(weight) || 0) + 1); // weight 카운팅
  });

  return answer;
}
