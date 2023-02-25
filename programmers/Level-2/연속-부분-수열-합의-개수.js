/**
 * 난이도 : 2
 * 키워드 : 구현
 */

// 첫 번째 풀이
function solution(elements) {
  const newElements = elements.concat(elements);
  const set = new Set();

  // 길이가 i인 수열의 합
  for (let i = 1; i <= elements.length; i++) {
    // 시작 지점
    for (let j = 0; j < elements.length; j++) {
      // j부터 길이 i의 합을 구한다.
      const sum = newElements
        .slice(j, j + i)
        .reduce((acc, cur) => (acc += cur), 0);
      set.add(sum);
    }
  }
  return set.size;
}

// 두 번째 풀이
// 합을 모두 더하기
function solution(elements) {
  const newElements = elements.concat(elements);
  const set = new Set();

  for (let i = 0; i <= elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += newElements[i + j];
      set.add(sum);
    }
  }
  return set.size;
}
