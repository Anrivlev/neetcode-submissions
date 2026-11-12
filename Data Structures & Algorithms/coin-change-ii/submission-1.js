class Solution {
  /**
   * @param {number} amount
   * @param {number[]} coins
   * @return {number}
   */
  change(amount, coins) {
    let prevRow = new Array(amount + 1).fill(0);
    let currRow = new Array(amount + 1).fill(0);
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      currRow[0] = 1;
      for (let j = 1; j <= amount; j++) {
        currRow[j] = (prevRow[j] ?? 0) + (currRow[j - coin] ?? 0);
      }
      prevRow = currRow.slice();
    }
    return prevRow.at(-1);
  }
}