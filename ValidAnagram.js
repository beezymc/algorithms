//https://leetcode.com/problems/valid-anagram/solution/

//Time: O(n)
//Space: O(1) - map caps out at a constant of whatever types of characters are being considered.
const validAna = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) return false;
  const map = {};
  for (let i = 0; i < strOne.length; i++) {
    map[strOne[i]] = map[strOne[i]] + 1 || 1;
  }
  for (let i = 0; i < strTwo.length; i++) {
    if (map[strTwo[i]] === undefined || map[strTwo[i]] === 0) return false;
    map[strTwo[i]]--;
  }
  return true;
}