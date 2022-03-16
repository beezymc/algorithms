//https://leetcode.com/problems/insert-delete-getrandom-o1/submissions/

//Time: O(1) for all operations
//Space: O(N) for map and list.
class RandomNumGenerator {
  constructor() {
    this.list = [];
    this.map = {};
  }
  insert(val) {
    if (this.map[val]) return false;
    this.map[val] = this.list.length;
    this.list.push(val);
    return true;
  }
  remove(val) {
    if (this.map[val] === undefined) return false;
    const index = this.map[val];
    delete this.map[val];
    const lastEl = this.list.pop();
    if (this.list.length === index) return true;
    this.list[index] = lastEl;
    this.map[lastEl] = index;
    return true;
  }
  getRandom() {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}