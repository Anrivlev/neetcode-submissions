class Solution {
  /**
   * @param {number} n - a positive integer
   * @return {number}
   */
  hammingWeight(n) {
    let weight = 0;
    while (n > 0) {
      weight++;
      n &= n - 1;
    }
    return weight;
  }
}
