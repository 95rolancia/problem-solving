function solution(s) {
  const arr = s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  return arr[0] + " " + arr[arr.length - 1];
}

solution("-1 -4 -3 -2");
solution("1 2 3 4");
