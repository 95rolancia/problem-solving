/**
 * 난이도 : Level 2
 * 키워드 : Map
 */

function solution(topping) {
  let answer = 0;
  // 1. 0 / 1, 2, 3, ...topping.length 자르기.
  const first = new Map([[topping[0], 1]]);
  const second = new Map();

  for (let i = 1; i < topping.length; i++) {
    const count = second.get(topping[i]) || 0;
    second.set(topping[i], count + 1);
  }
  // 2. 왼쪽 케이크의 길이를 하나 씩 늘리면서 동등한지 검사
  for (let i = 1; i < topping.length - 1; i++) {
    if (first.size === second.size) answer += 1; // 동등할 때

    first.set(topping[i], first.get(topping[i]) + 1 || 1); // 왼쪽 케이크 길이 늘리기
    // 오른쪽 케이크 길이 줄이기
    if (second.get(topping[i]) === 1) {
      second.delete(topping[i]);
    } else {
      second.set(topping[i], second.get(topping[i]) - 1);
    }
  }
  return answer;
}
