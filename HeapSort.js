//https://www.youtube.com/watch?v=B7hVxCmfPtM&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=4

//Time: O(nlogn)
//Space: O(1)
const heapSort = (nums) => {
  //Convert A[1...n] into a max heap
  for (let i = Math.floor((nums.length - 1)/2); i >= 0; i--) { //[n/2 + 1...n are leaves]
    let leftChild = 2*i;
    let rightChild = 2*i + 1;
    if (nums[i] < nums[leftChild] || nums[i] < nums[rightChild]) {
      let largestChild = nums[leftChild] > nums[rightChild] ? leftChild : rightChild;
      [nums[i], nums[largestChild]] = [nums[largestChild], nums[i]];
    }
  }
  //Swap A[n] with A[0] so that max is at the end of the array.
  //Discard node n from heap, decrementing heap size.
  //Run max heapify on root to potentially fix incorrect root.
  const sorted = [];
  while (nums.length) {
    [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]];
    sorted.push(nums.pop());
    if (nums.length >= 3) {
      if (nums[0] < nums[1] || nums[0] < nums[2]) {
        let largestChild = nums[1] > nums[2] ? 1 : 2;
        [nums[0], nums[largestChild]] = [nums[largestChild], nums[0]];
      }
    } else if (nums.length === 2) {
      if (nums[1] > nums[0]) {
        [nums[0], nums[1]] = [nums[1], nums[0]];
      }
    }
  }
  return sorted;
};