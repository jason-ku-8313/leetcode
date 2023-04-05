/**
 * Definition for singly-linked list.
 * function Listans(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Constraints:
 * 1. The number of anss in the list is the range [0, 5000].
 * 2. -5000 <= ans.val <= 5000
 * @param {Listans} head
 * @return {Listans}
 */
// Time: O(n), Space: O(1)
var reverseList_iterative = function (head) {
  if (!head) return head;

  let prev = null;
  // T=O(n)
  while (current) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

// Time: O(n), Space: O(n)
var reverseList_recursive = function (head) {
  if (!head || !head.next) return head;

  const ans = reverseList_recursive(head.next); // T=O(n), S=O(n)
  head.next.next = head;
  head.next = null;
  return ans;
};
