function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let zeroCnt = lottos.filter((x) => x === 0).length;
  let collect = lottos.filter((x) => win_nums.includes(x)).length;
  return [rank[collect + zeroCnt], rank[collect]];
}
