class Solution {
  /**
   * Решение для произвольного дерева
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    const parents = new Map();
    const stack = [root];
    let isPFound, isQFound;
    while (stack.length > 0) {
      const node = stack.pop();
      if (node === p) isPFound = true;
      if (node === q) isQFound = true;
      if (isPFound && isQFound) break;
      if (node.left) {
        parents.set(node.left, node);
        stack.push(node.left);
      }
      if (node.right) {
        parents.set(node.right, node);
        stack.push(node.right);
      }
    }
    if (!isPFound || !isQFound) return null;

    const pParentsSet = new Set();
    let curr = p;
    while (curr) {
      pParentsSet.add(curr);
      curr = parents.get(curr);
    }
    curr = q;
    while (curr) {
      if (pParentsSet.has(curr)) return curr;
      curr = parents.get(curr);
    }
    return root;
  }
}