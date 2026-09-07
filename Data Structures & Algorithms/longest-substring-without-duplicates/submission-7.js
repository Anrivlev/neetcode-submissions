class Solution {
  /**
   * Решение с Map (оптимальнее по итерациям с left)
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
    let maxLength = 0;
    let left = 0;
    let right = 0;
    const visited = new Map();
    while (right < s.length) {
      let char = s[right];
      const previousIndex = visited.get(char);
      if (previousIndex !== undefined && previousIndex >= left) {
        left = previousIndex + 1;
      }
      visited.set(char, right);
      const length = right - left + 1;
      if (length > maxLength) maxLength = length;
      right++;
    }
    return maxLength;
  }
}