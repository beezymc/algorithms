//https://leetcode.com/problems/coin-change/submissions/

//Time O(amount * # of coin types)
//Space O(amount) for the array
const coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};