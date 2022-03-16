//https://leetcode.com/problems/lru-cache/solution/

//Note: Need doubly-linked list class for optimal solution
//Time: O(1) -- all operations are constant.
//Space: O(capacity)
class DoublyLinkedList {
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.connect(this.head, this.tail);
  }
  connect(p, q) {
    p.next = q;
    q.prev = p;
  }
  addToFront(node) {
    this.connect(node, this.head.next);
    this.connect(this.head, node);
  }
  remove(node) {
    this.connect(node.prev, node.next);
  }
  moveToFront(node) {
    this.remove(node);
    this.addToFront(node);
  }
  removeLast() {
    const last = this.tail.prev;
    this.remove(this.tail.prev);
    return last;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};
    this.list = new DoublyLinkedList();
  }
  put(key, val) {
    if (this.map[key]) {
      const node = this.map[key];
      node.val = val;
      this.list.moveToFront(node);
      return;
    }
    if (this.size === this.capacity) {
      const node = this.list.removeLast();
      delete this.map[node.key];
      this.size--;
    }
    const newNode = new ListNode(key, val);
    this.map[key] = newNode;
    this.list.addToFront(newNode);
    this.size++;
    return;
  }
  get(key) {
    if (!this.map[key]) return -1;
    const node = this.map[key];
    this.list.moveToFront(node);
    return node.val;
  }
}