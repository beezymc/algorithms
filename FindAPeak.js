//https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb

//Peak for a 1-D array

//Time O(logn)
//Space O(1)
const arrayPeak = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let mid = Math.floor(left + (right-left)/2);
    if (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) {
      return nums[mid];
    }
    if (nums[mid - 1] > nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};

let nums = [[1, 3, 5, 4],
[11, 2, 3, 6],
[7, 9, 2, 4],
[8, 6, 7, 1]];

//Time O(n)--finding max
//Space O(1)
const matrixPeak = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor(left + (right-left)/2);
  let rowMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[mid][i] > nums[mid][rowMax]) {
      console.log(nums[mid][i]);
      rowMax = i;
    };
  }
  while (right >= left) {
    if (nums[mid][rowMax - 1] < nums[mid][rowMax]) {
      right = rowMax - 1;
    } else if (nums[mid][rowMax] < nums[mid][rowMax + 1]) {
      left = rowMax + 1;
    } else {
      return nums[mid][rowMax];
    }
    rowMax = Math.floor(left + (right-left)/2);
  }
}

console.log(matrixPeak(nums));