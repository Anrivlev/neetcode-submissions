class Solution {
  /**
   * @param {number} m
   * @param {number} n
   * @return {number}
   */
  uniquePaths(m, n) {
    const grid = Array.from({ length: m }, () => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
      }
    }
    return grid.at(-1).at(-1);
  }
}
