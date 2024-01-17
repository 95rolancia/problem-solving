// 출저: https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 1 <= participant.length <= 100,000
// completion.length = participant.length - 1

function solution(participant, completion) {
  // 1. participant를 순회하며 이름 카운팅
  const map = participant.reduce((acc, cur, i) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    acc.set(completion[i], (acc.get(completion[i]) || 0) - 1);
    return acc;
  }, new Map());

  // cnt가 0보다 큰 것은 무조건 있고 이를 찾으면 이름을 반환
  for (const [person, cnt] of map) {
    if (cnt > 0) return person;
  }
}
