/**
 * 프로그래머스
 * Level 2
 * JadenCase 문자열 만들기
(https://programmers.co.kr/learn/courses/30/lessons/12951)
 *
 */

function solution(s) {
  let answer = "";
  s.split(" ").forEach((a) => {
    let temp = "";
    a.split("").forEach((b, i) => {
      if (i === 0 && !Number.isInteger(b)) {
        temp += b.toUpperCase();
      } else {
        temp += b.toLowerCase();
      }
    });
    answer += temp + " ";
  });
  return answer.slice(0, answer.length - 1);
}

const testcase1 = "3people unFollowed me";
const answer1 = "3people Unfollowed Me";

const testcase2 = "for the last week";
const answer2 = "For The Last Week";

console.log(solution(testcase1));
console.log(solution(testcase2));

{
  // 다른 좋은 풀이 방법
  function solution(s) {
    let answer = s.split(" ").map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase());
    return answer.join(" ");
  }
}
