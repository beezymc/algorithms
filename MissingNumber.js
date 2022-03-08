//https://leetcode.com/problems/missing-number/submissions/

//Time: O(n)
//Space: O(1)
const missingNumber = (nums) => {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i]; //if everything is xor'd with everything, what's left is the missing number since the index & array value will cancel.
  }
  return missing;
}