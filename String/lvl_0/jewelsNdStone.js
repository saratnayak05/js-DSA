// 771. Jewels and Stones


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let sMap = new Map();

  for (let i = 0; i < stones.length; i++) {
    sMap.set(stones[i], (sMap.get(stones[i]) || 0) + 1);
  }

  let occurrence = 0;

  for (let j = 0; j < jewels.length; j++) {
    const jewel = jewels[j];
    if (sMap.has(jewel)) {
      occurrence += sMap.get(jewel);
    }
  }

  return occurrence;
};


// link
//https://leetcode.com/problems/jewels-and-stones/description/?envType=problem-list-v2&envId=n6f2lgre