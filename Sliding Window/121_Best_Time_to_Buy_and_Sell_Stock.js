/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and
 * choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Constraints:
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 *
 * @param {number[]} prices
 * @return {number}
 */
// Time: O(n), Space: O(1)
var maxProfit_slidingWindow = function (prices) {
  let maxProfit = 0;
  let buyAt = prices[0];

  // T=O(n)
  for (const price of prices) {
    if (buyAt > price) {
      buyAt = price;
    } else {
      maxProfit = Math.max(price - buyAt, maxProfit);
    }
  }
  return maxProfit;
};
