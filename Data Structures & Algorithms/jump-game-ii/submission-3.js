class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  jump(nums) {
    if (nums.length <= 1) return 0;
    let jumpCount = 0;
    let left = 0;
    let right = 0;
    let nextRight = 1;
    while (right < nums.length - 1) {
      for (let i = left; i <= right; i++) {
        if (i + nums[i] > nextRight) nextRight = i + nums[i];
      }
      jumpCount++;
      left = right + 1;
      right = nextRight;
    }
    return jumpCount;
  }
}