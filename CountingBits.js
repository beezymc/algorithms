//https://leetcode.com/problems/counting-bits/solution/

//Time: O(n)
//Space: O(1) if not counting output Arr.
const countBits = (n) => {
  let arr = [0]
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset = i; //update offset at every multiple of 2
    arr[i] = arr[i - offset] + 1; //use the value at i - the offset and add 1 (new significant digit).
  }
  return arr;
};