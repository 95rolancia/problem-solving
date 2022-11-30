// Level 1

const solution = (answers) => {
  let answer = [];
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const a1 = answers.filter(
    (value, idx) => value === s1[idx % s1.length]
  ).length;
  const a2 = answers.filter(
    (value, idx) => value === s2[idx % s2.length]
  ).length;
  const a3 = answers.filter(
    (value, idx) => value === s3[idx % s3.length]
  ).length;

  const max = Math.max(a1, a2, a3);

  if (max === a1) answer.push(1);
  if (max === a2) answer.push(2);
  if (max === a3) answer.push(3);
  return answer;
};
