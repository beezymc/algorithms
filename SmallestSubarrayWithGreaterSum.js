const smallestSubarrayGreaterSum = (arr, s) => {
  let start = 0;
  let smallestLength = Infinity;
  let curSum = 0;
  for (let end = 0; end < arr.length; end++) {
    curSum += arr[end];
    while (curSum >= s) {
      smallestLength = Math.min(end - start + 1, smallestLength);
      curSum -= arr[start];
      start++;
    }
  }
  return smallestLength === Infinity ? 0 : smallestLength;
};

console.log(smallestSubarrayGreaterSum([2, 1, 5, 2, 3, 2], 7) === 2);
console.log(smallestSubarrayGreaterSum([3, 4, 1, 1, 6], 8) === 3);