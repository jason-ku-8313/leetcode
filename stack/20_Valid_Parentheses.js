/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Constraints:
 * 1. 1 <= s.length <= 104
 * 2. s consists of parentheses only '()[]{}'.
 *
 * @param {string} s
 * @return {boolean}
 */
// Time: O(n), Space: O(n)
var isValid_stack = function (s) {
  const stack = []; // S=O(n)
  const openBrackets = ['(', '[', '{'];
  const closeBrackets = [')', ']', '}'];

  // T=O(n)
  for (const c of s) {
    const openBracketIndex = openBrackets.indexOf(c);
    if (openBracketIndex !== -1) {
      stack.push(closeBrackets[openBracketIndex]);
      continue;
    }
    if (stack.pop() !== c) {
      return false;
    }
  }
  return stack.length === 0;
};
