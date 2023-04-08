/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 * Constraints:
 * 1. The number of nodes in the list is sz.
 * 2. 1 <= sz <= 30
 * 3. 0 <= Node.val <= 100
 * 4. 1 <= n <= sz
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Time: O(n), Space: O(n)
var removeNthFromEnd_useExtraSpace = function (head, n) {
  const arr = []; // S=O(n)
  let dummy = head;

  // T=O(n)
  while (dummy) {
    arr.push(dummy);
    dummy = dummy.next;
  }

  if (arr.length - n === 0) {
    return head.next;
  }

  const prev = arr[arr.length - n - 1];
  const target = arr[arr.length - n];
  prev.next = target.next;
  return head;
};

// Time: O(n), Space: O(1)
var removeNthFromEnd_slowFastPointer = function (head, n) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Prevent edge case -> [1], n=1
  if (!fast) {
    return head.next;
  }

  // T=O(n)
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
};
