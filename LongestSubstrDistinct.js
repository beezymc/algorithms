const longestSubstrDistinct = (str) => {
  const charMap = {};
  let maxSubstr = -Infinity;
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    if (charMap[str[end]]) start = Math.max(start, charMap[str[end]]);
    maxSubstr = Math.max(maxSubstr, end - start + 1);
    charMap[str[end]] = end + 1;
  }
  return maxSubstr;
};

console.log(longestSubstrDistinct("aabccbb") === 3);
console.log(longestSubstrDistinct("abbbb") === 2);
console.log(longestSubstrDistinct("abccde") === 3);