/**
 * 난이도 : Level 2
 * 키워드 : 구현
 *
 * 풀이 :
 * 1. n만큼 true 값을 가진 배열을 생성
 * 2. section에 해당하는 값은 false로 설정
 * 3. 1에서 만든 배열을 돌면서 false로 된 값을 찾고 그 idx부터 롤러의 길이 만큼 true로 설정과
 * 동시에 answer += 1
 * 4. answer 반환
 */

// n: 벽 길이, m: 롤러의 길이, section: 구역 배열
function solution(n, m, section) {
  let answer = 0;

  const draw = Array(n).fill(true);

  section.forEach((s) => {
    draw[s - 1] = false;
  });

  let idx = 0;
  while (true) {
    if (idx >= n) {
      break;
    }

    if (!draw[idx]) {
      draw.fill(true, idx, idx + m);
      answer += 1;
      idx += m;
    } else {
      idx += 1;
    }
  }

  return answer;
}
