const longestSubOnesReplace = (arr, k) => {
  let maxOnes = 0;
  let longest = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    if (arr[end] === 1) maxOnes++;
    if (end - start + 1 - maxOnes > k) {
      if (arr[start] === 1) maxOnes--;
      start++;
    }
    longest = Math.max(longest, end - start + 1);
  }
  return longest;
};

console.log(longestSubOnesReplace([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2) === 6);
console.log(longestSubOnesReplace([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3) === 9);
