//https://leetcode.com/problems/climbing-stairs/solution/
//Note that there are two 'best' solutions but they're mathy/can be ignored.

//Recursive Solution
//Time O(2^n) and O(n) if memoized.
//Space O(n) (depth of tree is up to n)
const naiveSolution = (n, i = 0, memo = []) => {
  if (i > n) {
    return 0;
  }
  if (i === n) {
      return 1;
  }
  // if (memo[i] > 0) {
  //   return memo[i];
  // }
  // memo[i] = naiveSolution(n, i + 1, memo) + naiveSolution(n, i + 2, memo);
  // return memo[i];
  return naiveSolution(n, i + 1) + naiveSolution(n, i + 2)
};

//DP Solution
//Time O(n)
//Space O(n)
const betterSolution = (n) => {
  if (n === 1) return 1;
  const dp = new Array(n + 1).fill(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

//Fibonacci Solution
//Time O(n)
//Space O(1)
const evenBetterSolution = (n) => {
  if (n === 1) return 1;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};