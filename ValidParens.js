//https://leetcode.com/problems/valid-parentheses/solution/

//Time: O(n)
//Space: O(n) for the stack
const validParens = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ')') {
          if (stack.pop() !== '(') return false;
      } else if (s[i] === '}') {
          if (stack.pop() !== '{') return false;
      } else if (s[i] === ']') {
          if (stack.pop() !== '[') return false;
      } else {
          stack.push(s[i]);
      }
  }
  return stack.length === 0 ? true : false;
}