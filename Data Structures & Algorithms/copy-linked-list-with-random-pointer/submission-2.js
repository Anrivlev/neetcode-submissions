class Solution {
  /**
   * Итеративное решение
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    if (!head) return null;
    const nodes = new Map();
    function copyNode(node) {
      if (!node) return null;
      const existingNode = nodes.get(node);
      if (existingNode) return existingNode;
      const newNode = { val: node.val, next: null, random: null };
      nodes.set(node, newNode);
      return newNode;
    }
    const newHead = copyNode(head);
    newHead.next = copyNode(head.next);
    newHead.random = copyNode(head.random);
    let newCurr = newHead.next;
    let curr = head.next;
    while (curr) {
      const copy = newCurr;
      copy.next = copyNode(curr.next);
      copy.random = copyNode(curr.random);
      curr = curr.next;
      newCurr = copy.next;
    }
    return newHead;
  }
}