//https://leetcode.com/problems/valid-palindrome/solution/

//Time: O(n)
//Space: O(1)
const isPalindrome = (s) => {
  const zCode = "z".charCodeAt(0);
  const aCode = "a".charCodeAt(0);
  const zeroCode = "0".charCodeAt(0);
  const nineCode = "9".charCodeAt(0);
  let lcStr = s.toLowerCase();
  let left = 0;
  let right = lcStr.length - 1;
  while (right > left) {
      if (!((lcStr[left].charCodeAt(0) <= zCode && lcStr[left].charCodeAt(0) >= aCode) || (lcStr[left].charCodeAt(0) >= zeroCode && lcStr[left].charCodeAt(0) <= nineCode))) {
          left++;
      } else if (!((lcStr[right].charCodeAt(0) <= zCode && lcStr[right].charCodeAt(0) >= aCode) || (lcStr[right].charCodeAt(0) >= zeroCode && lcStr[right].charCodeAt(0) <= nineCode))) {
          right--;
      } else if (lcStr[left] !== lcStr[right]) {
          return false;
      } else {
          right--;
          left++;
      }
  }
  return true;
};