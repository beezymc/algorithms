//https://leetcode.com/problems/remove-nth-node-from-end-of-list/solution/

//Time: O(n)
//Space: O(1)
const removeNth = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  for (let i = 0; i <= n; i++) {
      first = first.next;
  }
  while (first) {
      first = first.next;
      second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};