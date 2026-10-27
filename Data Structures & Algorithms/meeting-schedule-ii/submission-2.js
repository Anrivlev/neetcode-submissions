class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;
    intervals.sort((a, b) => a.start - b.start);
    const endTimes = new MinPriorityQueue();
    endTimes.enqueue(intervals[0].end);
    for (let i = 1; i < intervals.length; i++) {
      const interval = intervals[i];
      const minEndTime = endTimes.front();
      if (interval.start >= minEndTime) {
        endTimes.dequeue();
      }
      endTimes.enqueue(interval.end);
    }
    return endTimes.size();
  }
}