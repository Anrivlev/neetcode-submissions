class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    const lengths = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
      for (let j = i; j >= 0; j--) {
        if (nums[i] > nums[j])
          lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }
    }
    return Math.max(...lengths);
  }
}