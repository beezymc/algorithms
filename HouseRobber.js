//https://leetcode.com/problems/house-robber/submissions/

//Time: O(n)
//Space: O(1)
const houseRobber = (arr) => {
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < nums.length; i++) {
    const profit = Math.max(p2 + nums[i], p1);
    p2 = p1;
    p1 = profit;
  }
  return p1;
};