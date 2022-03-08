//https://leetcode.com/problems/sum-of-two-integers/submissions/

//Time: O(1) (32-bit limitations)
//Space: O(1)
const sumTwoIntegers = (a, b) => {
  while (b !== 0) {
    let temp = (a & b) << 1; //this represents the carry (i.e. 1 + 1 = 10--2 in binary)
    a = a ^ b; //this represents the addition or subtraction (whereever there's a 1 & 0, we'll get a 1, otherwise 0);
    b = temp; //continue the loop until there's no longer a carry.
  }
  return a;
}