//https://leetcode.com/problems/find-median-from-data-stream/solution/

//sorting
//Time: O(NlogN) depending on type of sort.
//Space: O(N) for the store.
class MedianFinder {
  constructor() {
    this.store = [];
  }
  addNum(num) {
    this.store.push(num);
  }
  findMedian() {
    this.store.sort((a, b) => a - b);
    return this.store.length % 2 !== 0 ? this.store[Math.floor(this.store.length/2)] : (this.store[Math.floor(this.store.length/2)] + this.store[Math.floor(this.store.length/2 - 1)])/2;
  }
};

//PQ with Two Heaps
//Time: O(logN) for heap pushing and popping
//Space: O(N) since both heaps each hold half of the total N.
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

class MedianFinder {
  constructor() {
    this.min = new PriortyQueue((a, b) => a - b);
    this.max = new PriortyQUeue((a, b) => b - a);
  }
  addNum(num) {
    this.min.push(num);
    this.max.push(this.min.top());
    this.min.pop();
    if (this.min.data.length < this.max.data.length) {
      this.min.push(this.max.top());
      this.max.pop();
    }
  }
  findMedian() {
    return this.min.data.length > this.max.data.length ? this.min.top() : (this.min.top() + this.max.top())/2;
  }
};