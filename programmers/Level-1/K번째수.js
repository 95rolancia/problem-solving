function solution(array, commands) {
  const answer = commands.map((command) => {
    const [from, to, idx] = command;
    const temp = array.slice(from - 1, to).sort((a, b) => a - b);
    return temp[idx - 1];
  })
  return answer;
}
 