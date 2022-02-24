//https://leetcode.com/problems/contains-duplicate/solution/

//Time: O(n)
//Space: O(n)
const containsDup = (arr) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] + 1 || 1;
    if (map[arr[i]] === 2) {
      return true;
    }
  }
  return false;
};

//Time: O(n^2)
//Space: O(1)
const containsDup = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}