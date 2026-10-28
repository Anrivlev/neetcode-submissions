class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  missingNumber(nums) {
    const n = nums.length;
    let xor = 0;
    for (let i = 1; i <= n; i++) {
      xor ^= i;
    }
    for (const num of nums) {
      xor ^= num;
    }
    return xor;
  }
}