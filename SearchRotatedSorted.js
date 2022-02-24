//https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/

//Time: O(logn) - binary search
//Space: O(1)
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let mid = Math.floor(left + (right - left)/2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[left] <= nums[mid]) { //left side is unrotated
      if (target >= nums[left] && target < nums[mid]) { //if target is in the unrotated portion...
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { //right side is unrotated
      if (target <= nums[right] && target > nums[mid]) { //if target is in the unrotated portion...
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}