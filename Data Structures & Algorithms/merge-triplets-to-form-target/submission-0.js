class Solution {
  /**
   * @param {number[][]} triplets
   * @param {number[]} target
   * @return {boolean}
   */
  mergeTriplets(triplets, target) {
    // const mapA = new Map();
    // const mapB = new Map();
    // const mapC = new Map();

    // const addToMap = (triplet, index, map) => {
    //   let sameValue = map.get(triplet[index]);
    //   if (!sameValue) {
    //     sameValue = [];
    //     map.set(triplet[index], sameValue);
    //   }
    //   sameValue.push(triplet);
    // };

    // for (const triplet of triplets) {
    //   addToMap(triplet, 0, mapA);
    //   addToMap(triplet, 1, mapB);
    //   addToMap(triplet, 2, mapC);
    // }

    const bestResult = [-Infinity, -Infinity, -Infinity];

    for (const triplet of triplets) {
      if (
        triplet[0] <= target[0] &&
        triplet[1] <= target[1] &&
        triplet[2] <= target[2]
      ) {
        bestResult[0] = Math.max(bestResult[0], triplet[0]);
        bestResult[1] = Math.max(bestResult[1], triplet[1]);
        bestResult[2] = Math.max(bestResult[2], triplet[2]);
        if (
          bestResult[0] === target[0] &&
          bestResult[1] === target[1] &&
          bestResult[2] === target[2]
        )
          return true;
      }
    }
    return false;
  }
}
