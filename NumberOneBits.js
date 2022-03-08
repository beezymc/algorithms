//https://leetcode.com/problems/number-of-1-bits/solution/

//Time: O(1)
//Space: O(1)
const numberOneBits = (n) => {
  let count = 0;
  while (n !== 0) {
    n = (n & n - 1); //for each iteration, a 1-bit is removed, until n becomes 0.
    count++;
  }
  return count;
};

