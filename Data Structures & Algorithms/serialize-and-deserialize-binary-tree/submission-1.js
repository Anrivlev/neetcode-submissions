class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root) {
    if (!root) return `N`;
    const tokens = [];
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (!node) {
        tokens.push("N");
        continue;
      } else {
        tokens.push(node.val);
      }
      stack.push(node.right);
      stack.push(node.left);
    }
    return tokens.join(",");
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data) {
    const tokens = data.split(",");

    let index = 0;

    function dfs() {
      const token = tokens[index++];
      if (token === "N") return null;
      const val = Number.parseInt(token, 10);
      const left = dfs();
      const right = dfs();
      return { val, left, right };
    }

    return dfs();
  }
}