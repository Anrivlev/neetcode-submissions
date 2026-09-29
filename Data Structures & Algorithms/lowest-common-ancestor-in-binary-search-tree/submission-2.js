class Solution {
  /**
   * Решение для бинарного дерева поиска
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(root, p, q) {
    if (!root) return null;

    const min = Math.min(p.val, q.val);
    const max = Math.max(p.val, q.val);

    let curr = root;
    while (curr) {
      if (curr.val === max || curr.val === min) return curr;
      if (curr.val > max) {
        curr = curr.left;
        continue;
      }
      if (curr.val < min) {
        curr = curr.right;
        continue;
      }
      return curr;
    }
    return root;
  }
}