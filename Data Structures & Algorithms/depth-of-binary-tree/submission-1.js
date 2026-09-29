class Solution {
  /**
   * DFS
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(root) {
    if (!root) return 0;
    let max = 0;
    const queue = [{ node: root, depth: 1 }];
    while (queue.length > 0) {
      const { node, depth } = queue.pop();
      if (depth > max) max = depth;
      if (node.left) queue.push({ node: node.left, depth: depth + 1 });
      if (node.right) queue.push({ node: node.right, depth: depth + 1 });
    }
    return max;
  }
}