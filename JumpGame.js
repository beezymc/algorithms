//https://leetcode.com/problems/jump-game/

//Time: O(n)
//Space: O(1)
const jumpGame = (arr) => {
  let farthest = 0;
  for (let i = 0; i <= farthest; i++) {
    farthest = Math.max(i + arr[i], farthest);
    if (farthest >= nums.length - 1) return true;
  }
  return false;
};