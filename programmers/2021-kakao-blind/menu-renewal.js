function solution(orders, course) {
  let answer = [];
  course.forEach((food_cnt) => {
    let order_dict = {};
    let max_order = 0;
    orders.forEach((order) => {
      getComb([...order], food_cnt).forEach((order_comb) => {
        let order_str = order_comb.sort().join('');
        order_dict[order_str] = ++order_dict[order_str] || 1;
        max_order = Math.max(order_dict[order_str], max_order);
      });
    });

    for (const [key, value] of Object.entries(order_dict)) {
      if (value === max_order && value > 1) {
        answer.push(key);
      }
    }
  });

  return answer.sort();
}

function getComb(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getComb(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}
