/*
    Backjoon 2884번 
    알람시계
    브론즈 3
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `23 45
  `
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [hour, min] = input().split(" ").map(Number);
console.log(hour, min);

let setMin = undefined;
let setHour = undefined;

if (min >= 45) {
  setMin = min - 45;
  setHour = hour;
} else {
  setMin = min - 45 + 60;
  setHour = hour === 0 ? 23 : hour - 1;
}
console.log(setHour, setMin);
