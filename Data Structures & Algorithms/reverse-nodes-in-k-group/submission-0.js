/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @param {number} k
   * @return {ListNode}
   */
  reverseKGroup(head, k) {
    if (head === null) return null;
    let curr = head;
    let prev = null;
    for (let i = 0; i < k; i++) {
      if (!curr) return this.reverse(prev);
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    head.next = this.reverseKGroup(curr, k);
    return prev;
  }

  reverse(head) {
    let curr = head;
    let prev = null;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}