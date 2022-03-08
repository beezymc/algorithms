//https://leetcode.com/problems/merge-two-sorted-lists/solution/

//dfs
//Time: O(l1 + l2)
//Space: O(l1 + l2)
const mergeTwo = (list1, list2) => {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwo(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwo(list1, list2.next);
    return list2;
  }
};

//bfs
//Time: O(l1 + l2)
//Space: O(1)
const mergeTwo = (list1, list2) => {
  let dummy = new ListNode(0);
  let prev = dummy;
  while (list1 && list2) {
      if (list1.val <= list2.val) {
          prev.next = list1;
          list1 = list1.next;
      } else {
          prev.next = list2;
          list2 = list2.next;
      }
      prev = prev.next;
  }
  prev.next = list1 === null ? list2 : list1;
  return dummy.next;
}