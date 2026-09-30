/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @param {number} k
   * @return {number}
   */
  kthSmallest(root, k) {
    return this.dfs(root, k, 0).answer;
  }

  dfs(root, k, counter) {
    if (!root) return { counter, answer: undefined };
    const fromLeft = this.dfs(root.left, k, counter);
    if (fromLeft.answer !== undefined) return fromLeft;
    const counterOfThis = fromLeft.counter + 1;
    if (counterOfThis === k)
      return { counter: counterOfThis, answer: root.val };
    const fromRight = this.dfs(root.right, k, counterOfThis);
    return fromRight;
  }
}