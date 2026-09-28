// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    const nodes = new Map();
    function copyNode(node) {
      if (!node) return null;
      const existingNode = nodes.get(node);
      if (existingNode) {
        return existingNode;
      }
      const newNode = {
        val: node.val,
        next: null,
        random: null,
      };
      nodes.set(node, newNode);
      newNode.next = copyNode(node.next);
      newNode.random = copyNode(node.random);
      return newNode;
    }
    return copyNode(head);
  }
}
