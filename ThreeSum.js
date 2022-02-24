//https://leetcode.com/problems/3sum/solution/

//Time: O(n^2)
//Space: O(n) for the set
const threeSum = (nums) => {
  nums.sort(); //Ok to sort since algorithm is n^2 time & sorting so is negligibly long
  let res = [];
  for (let i = 0; i < nums.length && nums[i] >= 0; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let seen = new Set();
      for (let j = i + 1; j < nums.length; j++) {
        let complement = -nums[i] - nums[j];
        if (seen.has(complement)) {
          res.push([nums[i], nums[j], complement]);
          while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
            j++;
          }
        }
        seen.add(nums[i]);
      }
    }
  }
  return res;
};

//similar to above, but doesn't utilize hashmap. Space still min O(logn) due to sorting.
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
      if (i === 0 || nums[i - 1] !== nums[i]) {
          let low = i + 1;
          let high = nums.length - 1;
          while (low < high) {
              let sum = nums[i] + nums[low] + nums[high];
              if (sum < 0) {
                  low += 1;
              } else if (sum > 0) {
                  high -= 1;
              } else {
                  res.push([nums[i], nums[low], nums[high]]);
                  low += 1;
                  high -= 1;
                  while (low < high && nums[low] === nums[low - 1]) {
                      low += 1;
                  }
              }
          }
      }
  }
  return res;
}