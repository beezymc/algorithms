//https://leetcode.com/problems/maximum-subarray/solution/

const maxSubarray = (nums) => {
  let currMax = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], nums[i] + currMax);
    max = Math.max(currMax, max);
  }
  return max;
};