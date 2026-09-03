class Solution {
  /**
   * two pointer solution
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const numsWithIndices = nums
      .map((value, index) => ({
        value,
        index,
      }))
      .sort((a, b) => a.value - b.value);
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const sum = numsWithIndices[left].value + numsWithIndices[right].value;
      if (sum === target)
        return [numsWithIndices[left].index, numsWithIndices[right].index];
      if (sum > target) right--;
      else left++;
    }
    return [-1, -1];
  }
}
