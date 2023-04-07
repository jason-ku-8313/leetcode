/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * You are given the head of a singly linked-list. The list can be represented as:
 *
 * L0 → L1 → … → Ln - 1 → Ln
 *
 * Reorder the list to be on the following form:
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 *
 * Constraints:
 * 1. The number of nodes in the list is in the range [1, 5 * 10^4].
 * 2. 1 <= Node.val <= 1000
 *
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// Time: O(n), Space: O(n)
var reorderList_stack = function (head) {
  const stack = []; // S=O(n)
  let dummy = head;

  // go through all the nodes
  // T=O(n)
  while (dummy) {
    // put nodes into a stack
    stack.push(dummy);
    dummy = dummy.next;
  }

  // go through nodes agian until reach half of the length
  dummy = head;
  let swipeTimes = ~~(stack.length / 2);
  while (swipeTimes > 0) {
    // rearrange with the node of stack
    const next = dummy.next;
    dummy.next = stack.pop();
    dummy.next.next = next;
    dummy = next;
    swipeTimes--;
  }
  // prevent cycle
  dummy.next = null;
};

// Time: O(n), Space: O(1)
var reorderList_slowFastPointer = function (head) {
  let tailOfLeft = head;
  let fast = head;

  // Splite ListNode from middle. For odd case, left side take the middle node.
  // Odd Nodes Case: [1,2,3,4,5] => [1,2.3], [4,5]
  // Even Nodes Case: [1,2,3,4] => [1,2], [3,4]
  while (fast.next?.next) {
    tailOfLeft = tailOfLeft.next;
    fast = fast.next.next;
  }
  let headOfRight = tailOfLeft.next;
  tailOfLeft.next = null;
  let headOfLeft = head;

  // reverse nodes of right. [4,5] => [5,4]
  let prev = null;
  while (headOfRight) {
    const next = headOfRight.next;
    headOfRight.next = prev;
    prev = headOfRight;
    headOfRight = next;
  }
  headOfRight = prev;

  // combine left and right nodes. [1,2,3] [5,4] => [1,5,2,4,3]
  while (headOfLeft && headOfRight) {
    const leftNext = headOfLeft.next;
    const rightNext = headOfRight.next;
    headOfLeft.next = headOfRight;
    headOfLeft.next.next = leftNext;
    headOfLeft = leftNext;
    headOfRight = rightNext;
  }
};
