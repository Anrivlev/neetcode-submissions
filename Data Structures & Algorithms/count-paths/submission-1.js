class Solution {
  /**
   * @param {number} m
   * @param {number} n
   * @return {number}
   */
  uniquePaths(m, n) {
    let prevRow = new Array(n).fill(1);
    let currRow = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        currRow[j] = prevRow[j] + currRow[j - 1];
      }
      const tmpRow = prevRow;
      prevRow = currRow;
      currRow = tmpRow;
    }
    return prevRow.at(-1);
  }
}