// 첫 번째 풀이
// 접근 방법
// 1. 두 번이상 반복하는 word가 발견되면 return
// 2. word를 특정 문자("O")로 replace
// 3. 특정 문자("O")만 있을 때 answer에 1 더하기

function solution(babbling) {
  let answer = 0;
  const words = ["aya", "ye", "woo", "ma"];

  babbling.forEach((b) => {
    let temp = b;
    for (const word of words.values()) {
      if (b.includes(word.repeat(2))) {
        return;
      } else {
        temp = temp.replace(new RegExp(word, "g"), "O");
      }
    }

    if (temp.search(/[^O]/) === -1) {
      answer++;
    }
  });
  return answer;
}
// 두번째 풀이
// 접근방법 : 정규표현식 사용
// 1. 두 개의 정규 표현식 사용
// 1.1 regex1: /(aya|ye|woo|ma)\1+/ 하나의 그룹이 반복될 때
function solution(babbling) {
  const regex1 = /(aya|ye|woo|ma)\1+/;
  const regex2 = /^(aya|ye|woo|ma)+$/;
  let answer = 0;
  babbling.forEach((b) => {
    if (regex1.test(b)) return;
    if (regex2.test(b)) answer++;
  });
  return answer;
}
