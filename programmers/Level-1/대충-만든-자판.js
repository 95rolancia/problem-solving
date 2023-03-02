/**
 * 난이도 : Level 1
 * 키워드 : map
 * 풀이 :
 * 1. keymap을 루프하면서 각 알파벳에 해당하는 최소 도달 거리를 Map에 저장
 * 2. targets를 루프하면서 최소 거리 구하기
 */

function solution(keymap, targets) {
  const map = new Map();
  keymap.forEach((key) => {
    Array.from(key).forEach((char, idx) => {
      const depth = map.get(char) || idx + 1;
      map.set(char, Math.min(depth, idx + 1));
    });
  });

  const answer = [];
  targets.forEach((target) => {
    let sum = 0;
    Array.from(target).forEach((char) => {
      sum += map.get(char);
    });

    if (isNaN(sum)) {
      answer.push(-1);
    } else {
      answer.push(sum);
    }
  });

  return answer;
}
