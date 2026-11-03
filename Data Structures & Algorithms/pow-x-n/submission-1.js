class Solution {
  /**
   * @param {number} x
   * @param {number} n
   * @return {number}
   */
  myPow(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return 1 / x;

    let remainingDegree = Math.abs(n);
    let result = 1;
    while (remainingDegree > 0) {
      if (remainingDegree % 2 === 1) {
        result *= x;
      }
      x *= x;
      remainingDegree = Math.floor(remainingDegree / 2);
    }

    return n > 0 ? result : 1 / result;
  }
}