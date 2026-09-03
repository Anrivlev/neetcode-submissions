class Solution {
  
   /**
   * one pass solution
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const numToFirstIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
      const pairIndex = numToFirstIndex.get(target - nums[i]);
      if (pairIndex !== undefined) {
        return [pairIndex, i];
      }
      numToFirstIndex.set(nums[i], i);
    }
    return [-1, -1];
  }
}
