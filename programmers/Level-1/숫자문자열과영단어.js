function solution(str) {
  const numberArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = str.toLowerCase();

  numberArr.forEach((n, idx) => {
    // `/${variable}/g` 은 작동 안함
    const regex = new RegExp(n, "g");
    answer = answer.replace(regex, idx);
  });

  return parseInt(answer);
}
