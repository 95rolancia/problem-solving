// 내가 푼 방법
const solution = (price, money, count) => {
  let cnt = 1;
  while (cnt !== count + 1) {
    money -= price * cnt++;
  }
  return money < 0 ? -money : 0;
};

// 한 번에 계산하는 방법
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
