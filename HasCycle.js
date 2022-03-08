//https://leetcode.com/problems/linked-list-cycle/submissions/

//Time: O(n)
//Space: O(1)
const hasCycle = (head) => {
  if (head === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};