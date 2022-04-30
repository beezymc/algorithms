const longestSubstrDistinctK = (str, k) => {
  let start = 0;
  let longestSubstr = -Infinity;
  let charCount = {};
  for (let end = 0; end < str.length; end++) {
    charCount[str[end]] = charCount[str[end]] + 1 || 1;
    while (Object.keys(charCount).length > k) {
      charCount[str[start]]--;
      if (charCount[str[start]] === 0) delete charCount[str[start]];
      start++;
    }
    longestSubstr = Math.max(longestSubstr, end - start + 1);
  }
  return longestSubstr
};

console.log(longestSubstrDistinctK("araaci", 2) === 4);
console.log(longestSubstrDistinctK("cbbebi", 3) === 5);