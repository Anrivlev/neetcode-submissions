class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canPartition(nums) {
    if (nums.length < 2) return false;
    const sum = nums.reduce((prev, curr) => prev + curr, 0);
    if (sum % 2 !== 0) return false;
    const halfSum = sum / 2;

    const isReachable = new Array(halfSum + 1).fill(false);
    isReachable[0] = true;

    for (let i = 0; i < nums.length; i++) {
      for (let j = halfSum; j >= nums[i]; j--) {
        isReachable[j] = isReachable[j] || isReachable[j - nums[i]];
      }
    }

    return isReachable[halfSum];
  }
}