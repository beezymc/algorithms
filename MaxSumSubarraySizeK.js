const maxSubarraySumK = (arr, k) => {
  let start = 0;
  let maxSum = -Infinity;
  let curSum = 0;
  for (let end = 0; end < arr.length; end++) {
    curSum += arr[end];
    if (end >= k) {
      curSum -= arr[start];
      start++;
      if (curSum > maxSum) maxSum = curSum;
    }
  }
  return maxSum
};

console.log(maxSubarraySumK([2, 1, 5, 1, 3, 2], 3) === 9);
console.log(maxSubarraySumK([2, 3, 4, 1, 5], 2) === 7);