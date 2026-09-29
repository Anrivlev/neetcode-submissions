class Solution {
  /**
   * Dfs решение
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  invertTree(root) {
    if (root === null) return null;
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.pop();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      const left = node.left;
      node.left = node.right;
      node.right = left;
    }
    return root;
  }
}