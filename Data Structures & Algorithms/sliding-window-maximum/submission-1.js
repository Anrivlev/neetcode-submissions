class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const heap = new MaxPriorityQueue((value) => nums[value]);

    const answer = [];
    for (let i = 0; i < k; i++) {
      heap.enqueue(i);
    }
    answer.push(nums[heap.front()]);

    for (let i = k; i < nums.length; i++) {
      heap.enqueue(i);
      while (heap.front() <= i - k) {
        heap.dequeue();
      }
      answer.push(nums[heap.front()]);
    }
    return answer;
  }
}