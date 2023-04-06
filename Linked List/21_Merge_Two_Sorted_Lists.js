/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Constraints:
 * 1. The number of nodes in both lists is in the range [0, 50].
 * 2. -100 <= Node.val <= 100
 * 3. Both list1 and list2 are sorted in non-decreasing order.
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Time: O(n), S=O(1)
var mergeTwoLists_iterative = function (list1, list2) {
  let head = new ListNode(0);
  let current = head;

  // T=O(n)
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;
  return head.next;
};

// Time: O(n), S=O(n)
var mergeTwoLists_recursive = function (list1, list2) {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists_recursive(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists_recursive(list1, list2.next);
    return list2;
  }``
};
