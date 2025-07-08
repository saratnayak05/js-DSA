//485. Max Consecutive Ones

var findMaxConsecutiveOnes = function (nums) {
  let maxConsNum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      maxConsNum = Math.max(maxConsNum, count);
    } else {
      count = 0;
    }
  }
  return maxConsNum;
};

//tested
let nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));

//link
// https://leetcode.com/problems/max-consecutive-ones/description/
