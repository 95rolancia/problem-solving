function solution(k, scores) {
  const answer = [];

  scores.forEach((score) => {
    if (goats.length < k) {
      goats.push(score);
    } else if (goats.length === k && goats[0] < score) {
      goats[0] = score;
    }

    goats.sort((a, b) => a - b);
    answer.push(goats[0]);
  });
}
