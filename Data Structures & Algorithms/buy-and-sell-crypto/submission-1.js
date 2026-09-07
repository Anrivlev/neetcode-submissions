class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    if (prices.length < 2) return 0;
    let currentMin = prices[0];
    let bestProfit = 0;
    for (const price of prices) {
      const profit = price - currentMin;
      if (profit > bestProfit) bestProfit = profit;
      if (price < currentMin) currentMin = price;
    }
    return bestProfit;
  }
}
