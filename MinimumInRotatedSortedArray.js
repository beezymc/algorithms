//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

//binary search
//Space O(1)
//Time O(log(n))

const betterSolution = (nums) => {
  //if array length is one, the only element is min, return the min.
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  //if the last element is greater than first, no rotation was made; we return the first element (array is sorted so first is min).
  if (nums[right] > nums[left]) return nums[left];
  while (right >= left) {
    let mid = Math.floor(left + (right - left)/2);
    if (nums[mid + 1] < nums[mid]) {
      return nums[mid + 1];
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }
    //if nums at the midpoint is greater than the first element, the minimum element is to the right of nums[mid], and so the left boundary is increased
    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      //otherwise the minimum elements is to the left of nums[mid], and so the right boundary is decreased.
      right = mid - 1;
    }
  }
  return -1;
};