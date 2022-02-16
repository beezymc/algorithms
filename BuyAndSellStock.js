//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//Time O(n^2)
//Space O(1)
const naiveSolution = (nums) => {
  let maxProfit = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //go through each possible profit and set maxProfit equal to it.
      maxProfit = Math.max(maxProfit, nums[j] - nums[i]);
    }
  }
  return maxProfit;
};

//Time O(n)
//Space O(1)
const betterSolution = (nums) => {
  let maxProfit = 0;
  let min = Infinity
  for (let i = 0; i < nums.length; i++) {
    //if we pass a smaller buy price, lock in that buy price.
    if (nums[i] < min) {
      min = nums[i];
    }
    //save the maximum profit (either unchanged, if prior profits are greater, or updated if the current profit is better).
    maxProfit = Math.max(maxProfit, nums[i] - min);
  }
  return maxProfit;
};