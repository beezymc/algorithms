//https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

//Time: O(n)
//Space: O(Min(m,n)) where m, n is the charset/alphabet and string size respectively.
const longestSubstring = (s) => {
  let map = {};
  let i = 0;
  let ans = 0;
  for (let j = 0; j < s.length; j++) {
      if (map[s[j]]) {
          i = Math.max(map[s[j]], i);
      }
      ans = Math.max(ans, j - i + 1);
      map[s[j]] = j + 1;
  }
  return ans;
};