//https://leetcode.com/problems/two-sum/solution

//Time: O(n^2)
//Space: O(1)
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === complement) return [i, j];
    }
  }
};

//Time O(n)
//Space O(n)
const twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [i, map[complement]];
    }
    map[nums[i]] = i;
  }
};