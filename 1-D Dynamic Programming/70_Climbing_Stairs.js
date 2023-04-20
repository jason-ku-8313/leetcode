/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Constraints:
 * 1. 1 <= n <= 45
 *
 * @param {number} n
 * @return {number}
 */
// Time: O(n), Space: O(1)
var climbStairs_bottomUp = function (n) {
  let one = 1;
  let two = 1;

  // T=O(n)
  for (let i = 1; i < n; i++) {
    const tmp = one;
    one += two;
    two = tmp;
  }
  return one;
};
