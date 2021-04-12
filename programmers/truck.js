/*
    프로그래머스 : 다리를 만드는 트럭
    난이도 : Level 2
    분류 : 구현
*/

class Queue {
  constructor() {
    this.data = [];
  }
  push(v) {
    this.data.push(v);
  }
  pop() {
    return this.data.shift() || null;
  }
  front() {
    return this.data[0] || null;
  }
  empty() {
    return this.data.length === 0;
  }
}

const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][0];
  }
  return sum;
};

const solution = (bridge_length, weight, truck_weights) => {
  let answer = 1;
  let q = new Queue();
  let tq = new Queue();
  for (let i = 0; i < truck_weights.length; i++) {
    tq.push(truck_weights[i]);
  }

  do {
    if (!q.empty() && answer - q.front()[1] === bridge_length) {
      q.pop();
    }
    //      tq가 비어있는지 확인을 하고 push 했어야 했는데 이 부분 때문에 디버깅에 오래걸림 ㅠ
    if (!tq.empty() && sumArr(q.data) + tq.front() <= weight) {
      q.push([tq.pop(), answer]);
    }

    answer++;
  } while (!q.empty() || !tq.empty());

  return answer - 1;
};
