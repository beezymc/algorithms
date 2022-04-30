const longestSubReplace = (str, k) => {
  const map = {};
  let longest = -Infinity;
  let start = 0;
  let maxRepeat = - Infinity;
  for (let end = 0; end < str.length; end++) {
    map[str[end]] = map[str[end]] + 1 || 1;
    maxRepeat = Math.max(maxRepeat, map[str[end]]);
    if (end - start + 1 - maxRepeat > k) {
      map[str[start]]--;
      if (map[str[start]] === 0) delete map[str[start]];
      start++;
    }
    longest = Math.max(longest, end - start + 1);
  }
  return longest;
};

console.log(longestSubReplace("aabccbb", 2) === 5);
console.log(longestSubReplace("abbcb", 1) === 4);
console.log(longestSubReplace("abccde", 1) === 3);
