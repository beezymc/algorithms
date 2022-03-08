//https://leetcode.com/problems/reverse-linked-list/submissions/

//dfs
//Time: O(n)
//Space: O(n)
const reverseList = (head) => {
  if (head === null || head.next === null) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

//bfs
//Time: O(n)
//Space: O(1)
const reverseList = (head) => {
  let p1 = null;
  let p2 = head;
  while (p2 !== null) {
    let temp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = temp;
  }
  return p1;
};