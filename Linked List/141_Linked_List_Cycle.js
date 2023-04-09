/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again
 * by continuously following the next pointer. Internally, pos is used to denote the index of
 * the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Constraints:
 * 1. The number of the nodes in the list is in the range [0, 10^4].
 * 2. -10^5 <= Node.val <= 10^5
 * 3. pos is -1 or a valid index in the linked-list.
 *
 * @param {ListNode} head
 * @return {boolean}
 */
// Time: O(1000), Space: O(1)
var hasCycle_bruteForce = function (head) {
  let maxLen = 10000;

  // T=O(10000)
  while (maxLen >= 0) {
    if (head === null) {
      return false;
    }
    head = head.next;
    maxLen--;
  }
  return true;
};

// Time: O(n), Space: O(n)
var hasCycle_set = function (head) {
  const set = new Set(); // S=O(n)

  // T=O(n)
  while (head) {
    let originalSize = set.size;
    set.add(head);
    if (set.size === originalSize) {
      return true;
    }
    head = head.next;
  }
  return false;
};

// Time: O(n), Space=O(1)
var hasCycle_slowFastPointer = function (head) {
  let slow = head;
  let fast = head.next;

  // T=O(n)
  while (fast) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next?.next;
  }
  return false;
};
