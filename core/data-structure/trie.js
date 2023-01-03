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
    let curNode = this.root;
    for (const char of string) {
      if (!curNode.children.has(char)) {
        curNode.children.set(char, new Node(curNode.value + char));
      }
      curNode = curNode.children.get(char);
    }
  }
  has(string) {
    let curNode = this.root;
    for (const char of string) {
      if (!curNode.children.has(char)) {
        return false;
      }
      curNode = curNode.children.get(char);
    }

    return true;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");

console.log(trie.has("cat"));
console.log(trie.has("can"));
console.log(trie.has("caa"));
