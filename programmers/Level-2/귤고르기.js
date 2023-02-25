/**
 * 난이도 : 2
 * 키워드 : 정렬, 구현
 *
 */

function solution(k, tangerine) {
  const tMap = new Map();
  tangerine.forEach((t) => tMap.set(t, (tMap.get(t) || 0) + 1));
  const cnt = Array.from(tMap.values()).sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;
  for (const v of cnt) {
    sum += v;
    answer += 1;
    if (sum >= k) break;
  }
  return answer;
}
