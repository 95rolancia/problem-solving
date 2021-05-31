/**
 * 프로그래머스 레벨 2 - 2개 이하로 다른 비트
 *
 * 완전 탐색 방식으로 접근하면 시간 초과 발생
 */

function solution(numbers) {
  let answer = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      answer.push(number + 1);
    } else {
      let temp = number.toString(2).padStart(32, "0");
      let tempArr = Array.from(temp);

      for (let i = tempArr.length - 1; i > 0; i--) {
        if (tempArr[i] === "0") {
          tempArr[i] = "1";
          tempArr[i + 1] = "0";
          break;
        }
      }
      answer.push(parseInt(tempArr.join(""), 2));
    }
  });

  for (let i = 1; i < 40; i += 2) console.log(i.toString(2));
  return answer;
}
