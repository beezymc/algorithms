//https://leetcode.com/problems/maximum-product-subarray/

//Time O(n^2)
//Space O(1)
//Go through each possible subarray and save the maximum product, return it.
const naiveSolution = (nums) => {
  let maxProduct = 0;
  for (let i = 0; i < nums.length; i++) {
    let accu = 1;
    for (let j = i; j < nums.length; j++) {
      accu *= nums[j];
      maxProduct = Math.max(maxProduct, accu);
    }
  }
  return maxProduct;
};

//Time O(n)
//Space O(1)
const betterSolution = (nums) => {
  //Store the minimum product and the maximum product (since minumum/maximum can become the other easily by being negated)
  let min = nums[0];
  let max = nums[0];
  //Keep track of the overall maximum product.
  let maxProduct = max;
  for (let i = 1; i < nums.length; i++) {
    //define a temporary maximum, the maximum between 3 items: the current value, the current value multiplied by the stored maximum product, and the current value multiplied by the stored minimum product.
    let tempMax = Math.max(nums[i], Math.max(nums[i] * max, nums[i] * min));
    //set the minimum equal to the min between 3 items: the current value, the current value multiplied by the stored maximum product, and the current value multiplied by the stored minimum product.
    min = Math.min(nums[i], Math.max(nums[i] * max, nums[i] * min));
    //now that min has been checked, we can assign tempMax to max.
    max = tempMax;
    //check if the current maximum product is greater than the overall maximum product.
    maxProduct = Math.max(maxProduct, max);
  }
  return maxProduct;
};