// Level 1

function solution(a, b) {
  const arr = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const targetDate = new Date("2016");
  targetDate.setMonth(a - 1);
  targetDate.setDate(b);
  return arr[datediff(new Date("2016-01-01"), targetDate) % 7];
}

function datediff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function getDay(month, day) {
  const dayArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let result = 0;

  if (month >= 2) {
    result = dayArr.slice(0, month - 1).reduce((acc, val) => acc + val);
  }
  result += day - 1;
  return result;
}
