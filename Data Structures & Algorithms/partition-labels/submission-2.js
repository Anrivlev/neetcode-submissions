class Solution {
  /**
   * @param {string} S
   * @return {number[]}
   */
  partitionLabels(S) {
    const charLastIndices = new Map();
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      charLastIndices.set(char, i);
    }

    const answer = [];
    let currStart = 0;
    let currEnd = 0;
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      const lastIndex = charLastIndices.get(char);
      currEnd = Math.max(currEnd, lastIndex);
      if (i === currEnd) {
        answer.push(currEnd - currStart + 1);
        currStart = i + 1;
      }
    }

    return answer;
  }
}