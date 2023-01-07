function solution() {
  let result = 0;
  const trie = new Trie();
  trie.insert("123");
  trie.insert("125");
  console.log(trie);
  return result;
}

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let cur = this.root;
    for (const char of string) {
      if (!cur.children.has(char)) {
        cur.children.set(char, new Node(1));
      } else {
        const children = cur.childrun.get(char);
        children.value++;
        cur.children.set(char, children);
      }
      cur = curNode.children.get(char);
    }
  }

  has(string) {
    let cur = this.root;
    for (const char of string) {
      if (!cur.children.has(char)) {
        return false;
      }
      cur = cur.children.get(char);
    }
    return true;
  }
}
