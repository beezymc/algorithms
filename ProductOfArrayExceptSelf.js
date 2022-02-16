//https://leetcode.com/problems/maximum-product-subarray/submissions/

//Time O(n)
//Space O(n)
const naiveSolution = (nums) => {
  const answ = [];
  const left = [1];
  const right = [];
  //populate an array where all values are the product of elements left of nums[i]
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i];
  }
  right[nums.length - 1] = 1;
  //populate an array where all values are the product of elements right of nums[i]
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i];
  }
  //multiply together to get into the answ array
  for (let i = 0; i < nums.length; i++) {
    answ[i] = left[i] * right[i];
  }
  return answ
};

//Time O(n)
//Space O(1) --not counting answ
//similar to above, but using a single variable to store the 'right' value, updating it after every loop.
const betterSolution = (nums) => {
  const answ = [1];
  for (let i = 1; i < nums.length; i++) {
    answ[i] = answ[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answ[i] *= right;
    right *= nums[i];
  }
  return answ;
};