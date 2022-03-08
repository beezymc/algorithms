//https://leetcode.com/problems/reverse-bits/solution/

//Time: O(1)
//Space: O(1)
const reverseBits = (n) => {
  let result = 0;
  for(let i = 0; i < 32;i++) {
      result *= 2; //ensure result power is updated
      if(n & 1) {
          result += 1; //add one to the result if last digit of n is 1. ex. if binary is 1, answ = 1 * 2^32
      }
      n = n >> 1; //shift n to the right.
  }
    return result
};

console.log(reverseBits(9));