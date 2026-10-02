class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsets(nums) {
    const allSubsets = [[]];

    for (const num of nums) {
      const length = allSubsets.length;
      for (let i = 0; i < length; i++) {
        const subset = allSubsets[i];
        allSubsets.push([...subset, num]);
      }
    }

    return allSubsets;
  }
}
