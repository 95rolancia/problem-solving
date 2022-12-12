function solution(foods) {
  let answer = "";
  foods.forEach((food, idx) => {
    if (idx === 0) return;
    answer += idx.toString().repeat(Math.floor(food / 2));
  });

  answer = answer + "0" + answer.split("").reverse().join("");
  return answer;
}
