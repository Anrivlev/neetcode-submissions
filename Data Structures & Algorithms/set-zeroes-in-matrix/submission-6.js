class Solution {
  /**
   * Первое решение не сработало.
   * @param {number[][]} matrix
   * @return {void}
   */
  setZeroes(matrix) {
    const m = matrix.length;
    if (m === 0) return;
    const n = matrix[0].length;
    if (n === 0) return;

    let isZeroRowZero = matrix[0].some((value) => value === 0);

    for (let i = 1; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== 0) continue;
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }

    for (let i = 1; i < m; i++) {
      if (matrix[i][0] !== 0) continue;
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }

    for (let j = 0; j < n; j++) {
      if (matrix[0][j] !== 0) continue;
      for (let i = 0; i < m; i++) {
        matrix[i][j] = 0;
      }
    }

    if (isZeroRowZero)
      for (let j = 0; j < n; j++) {
        matrix[0][j] = 0;
      }
  }
}