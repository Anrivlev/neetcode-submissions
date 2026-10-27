/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    intervals.sort((a, b) => a.start - b.start);
    let currentEnd = -Infinity;
    for (const interval of intervals) {
      if (interval.start < currentEnd) return false;
      currentEnd = interval.end;
    }
    return true;
  }
}