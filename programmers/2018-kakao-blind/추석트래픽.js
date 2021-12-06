function solution(lines) {
  let answer = 0;
  if (lines.length === 1) return 1;

  const log = [];

  lines.forEach((line) => {
    const [date, startTime, durationStr] = line.split(' ');
    const [hour, min, sec] = startTime.split(':');

    const endTime = (Number(hour) * 3600 + Number(min) * 60 + Number(sec)) * 1000;
    const duration = Number(durationStr.replace(/s/, ''));

    log.push([endTime - duration * 1000 + 1, endTime]);
  });

  for (let i = 0; i < log.length; i++) {
    answer = Math.max(
      answer,
      getThroughput(log, log[i][0], log[i][0] + 1000),
      getThroughput(log, log[i][1], log[i][1] + 1000)
    );
  }

  return answer;
}

function getThroughput(log, start, end) {
  let result = 0;
  for (let i = 0; i < log.length; i++) {
    if (log[i][0] < end && log[i][1] >= start) {
      result++;
    }
  }
  return result;
}
