class Solution {
  /**
   * @param {number[][]} matrix
   * @return {void}
   */
  rotate(matrix) {
    const n = matrix.length;
    if (n < 2) return;

    // Вертикально переворачиваем строки
    for (let i = 0; i < Math.floor(n / 2); i++) {
      const tmp = matrix[i];
      matrix[i] = matrix[n - i - 1];
      matrix[n - i - 1] = tmp;
    }

    const transpose = (i, j) => {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    };

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        transpose(i, j);
      }
    }
  }
}