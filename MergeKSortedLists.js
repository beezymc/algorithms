//https://leetcode.com/problems/merge-k-sorted-lists/submissions/

//brute force
//Time: O(N * log(N)) primarily due to sorting.
//Space: O(N) for a new linked list & depending on sorting algorithm.
const mergeKSorted = (lists) => {
  const nodes = [];
  for (let i = 0; i < lists.length; i++) {
    while(lists[i]) {
      nodes.push(lists[i].val);
      lists[i] = lists[i].next;
    }
  }
  nodes.sort((a, b) => a - b);
  const head = new ListNode();
  let dummy = head;
  while (nodes.length) {
    dummy.next = new ListNode(nodes.unshift());
    dummy = dummy.next;
  }
  return head.next;
};

//PQ (Note: Need to build priority queue since not default w/ JS)
//Time: O(Nlogk) -- log(k) for pop from/insert into queue, O(N) for placing nodes into the final list.
//Space: O(N) if considering output list. O(k) if not (pq will always hold the current node from each of the k lists)
class PriorityQueue {
  constructor(comp) {
    this.data = [];
    this.comp = comp;
  }
  _parent(i) {
    return Math.floor((i + 1)/2) - 1;
  }
  _left(i) {
    return 2 * (i + 1) - 1;
  }
  _right(i) {
    return 2 * (i + 1);
  }
  _swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
  _heapify(i) {
    const l = this._left(i);
    const r = this._right(i);
    let largest = i;
    if (l < this.data.length && this.comp(this.data[largest], this.data[l]) > 0) largest = l;
    if (r < this.data.length && this.comp(this.data[largest], this.data[r]) > 0) largest = r;
    if (largest !== i) {
      this._swap(largest, i);
      this._heapify(largest);
    }
  }
  push(val) {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0 && this.comp(this.data[this._parent(i)], this.data[i]) > 0) {
      this._swap(this._parent(i), i);
      i = this._parent(i);
    }
  }
  top() {
    return this.data[0];
  }
  pop() {
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();
    this._heapify(0);
  }
};

const mergeKLists = (lists) => {
  const pq = new PriorityQueue((a, b) => a[0].val - b[0].val);
  for (let i = 0; i < lists.length; i++) {
    if (!lists[i]) continue;
    pq.push([lists[i], i]);
    lists[i] = lists[i].next;
  }
  const head = new ListNode();
  let curr = head;
  while(pq.data.length) {
    const [node, i] = pq.top();
    pq.pop();
    curr.next = node;
    if (lists[i]) {
      pq.push([lists[i], i]);
      lists[i] = lists[i].next;
    }
    curr = curr.next;
  }
  return head.next;
}