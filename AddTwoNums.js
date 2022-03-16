//https://leetcode.com/problems/add-two-numbers/submissions/

//Time: O(max(p, q)) -- whichever list is longer.
//Space: O(max(p, q)) -- the new list is the length of the longest list + 1 at most.
const AddTwoNums = (p, q) => {
  const head = new ListNode();
  let dummy = head;
  let carry = 0;
  while (p || q) {
    const x = (p === null) ? 0 : p.val;
    const y = (q === null) ? 0 : q.val;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    dummy.next = new ListNode(sum % 10);
    if (p) p = p.next;
    if (q) q = q.next;
    dummy = dummy.next;
  }
  if (carry) dummy.next = new ListNode(carry);
  return head.next;
};