//https://leetcode.com/problems/top-k-frequent-elements/

//PQ
//Time: O(N log k) -- N to build the map, O(k) for the heap push/pop.
//Space: O(N + k) -- map + heap
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

const topKFrequent = (s, k) => {
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = count[s[i]] + 1 || 1;
  }
  const pq = new PriorityQueue((a, b) => a[1] - b[1]);
  for (let val in count) {
    pq.push([val, count[val]]);
  }
  while (pq.data.length > k) {
    pq.pop();
  }
  const res = [];
  while (pq.data.length) {
    res.push(pq.top()[0]);
    pq.pop();
  }
  return res;
};
