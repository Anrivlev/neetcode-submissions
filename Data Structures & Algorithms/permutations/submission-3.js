class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  permute(nums) {
    let res = [[]];

    for (const num of nums) {
      const nextRes = [];
      for (const arr of res) {
        for (let i = 0; i <= arr.length; i++) {
          nextRes.push(arr.toSpliced(i, 0, num));
        }
      }
      res = nextRes;
    }

    return res;
  }
}