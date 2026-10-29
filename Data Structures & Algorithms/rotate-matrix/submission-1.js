class Solution {
  /**
   * Решение не работает. в circleSwap неправильные индексы.
   * @param {number[][]} matrix
   * @return {void}
   */
  rotate(matrix) {
    const n = matrix.length;
    if (n < 2) return;

    let l = 0;
    let r = n - 1;
    while (l < r) {
      for (let i = 0; i < r - l; i++) {
        const tmp = matrix[l][l + i];
        matrix[l][l + i] = matrix[r - i][l];
        matrix[r - i][l] = matrix[r][r - i];
        matrix[r][r - i] = matrix[l + i][r];
        matrix[l + i][r] = tmp;
      }
      l++;
      r--;
    }
  }
}