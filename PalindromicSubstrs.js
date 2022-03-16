//https://leetcode.com/problems/palindromic-substrings/submissions/

//Time: O(n^2)
//Space: O(1)
const palindromicSubstr = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += checkFromCenter(s, i, i);
    count += checkFromCenter(s, i, i + 1);
  }
  return count;
};

const checkFromCenter = (s, left, right) => {
  let count = 0;
  while (right < s.length && left >= 0) {
    if (right !== left) break;
    count++;
    right++;
    left--;
  }
  return count;
};