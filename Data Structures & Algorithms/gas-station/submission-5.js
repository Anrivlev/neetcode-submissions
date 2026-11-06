class Solution {
  /**
   * more effective solution with ideas from proper solutions that can be found online
   * @param {number[]} gas
   * @param {number[]} cost
   * @return {number}
   */
  canCompleteCircuit(gas, cost) {
    if (gas.length === 0 || gas.length !== cost.length) return -1;
    const totalGas = gas.reduce((prev, curr) => prev + curr, 0);
    const totalCost = cost.reduce((prev, curr) => prev + curr, 0);
    if (totalCost > totalGas) return -1;

    let startIndex = 0;
    let currGas = 0;
    for (let i = 0; i < gas.length; i++) {
      currGas += gas[i] - cost[i];
      if (currGas < 0) {
        currGas = 0;
        startIndex = i + 1;
      }
    }
    return startIndex;
  }
}