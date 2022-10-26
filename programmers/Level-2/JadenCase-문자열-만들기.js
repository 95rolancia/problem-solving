/**
 * 프로그래머스
 * Level 2
 * JadenCase 문자열 만들기 (https://programmers.co.kr/learn/courses/30/lessons/12951)
 *
 */

// 2022-10-26 문제 풀이
// 주의: *공백문자가 연속해서 나올 수 있습니다*
// str.charAt(idx) -> idx가 str.length보다 클 때 빈 문자열("")을 반환
// str[0] -> undefined 반환가능성

function solution(s) {
  const temp = s.split(" ").map((word) => {
    if (word === "") return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return temp.join(" ");
}

const tc1 = "3people unFollowed me";
const answer1 = "3people Unfollowed Me";

const tc2 = "for the last week";
const answer2 = "For The Last Week";

console.log(solution(tc1));
console.log(solution(tc2));
