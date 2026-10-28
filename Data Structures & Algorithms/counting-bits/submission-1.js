class Solution {
  /**
   * @param {number} n
   * @return {number[]}
   */
  countBits(n) {
    const answer = new Array(n + 1).fill(0);
    for (let i = 1; i < n + 1; i++) {
      answer[i] = answer[i >> 1] + (i & 1);
    }
    return answer;
  }
}