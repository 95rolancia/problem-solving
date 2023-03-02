/**
 * 난이도 : Level 1
 * 키워드 : 배열
 * 풀이 :
 * goal을 루프하면서 단어가 cards1, cards2의 맨 앞에 있는 단어랑 같은지 비교
 */

function solution(cards1, cards2, goal) {
  for (const word of goal) {
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
