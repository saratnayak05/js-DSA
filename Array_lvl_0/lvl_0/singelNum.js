//136. Single Number

var singleNumber = function (nums) {
  //using object
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1;
  }

  for (let key in hash) {
    if (hash[key] == 1) {
      return Number(key);
    }
  }

  //using xor
  // let singleOne=0;
  // for(let i=0;i<nums.length;i++){
  //         singleOne^=nums[i];
  // }
  // return singleOne;

  //using map
  // const map = new Map();

  // for (let num of nums) {
  //     if (map.has(num)) {
  //         map.set(num, map.get(num) + 1);
  //     } else {
  //         map.set(num, 1);
  //     }
  // }

  // for (let [num, count] of map.entries()) {
  //     if (count === 1) return num;
  // }
};

//test
let nums = [2, 2, 1];
console.log(singleNumber(nums));

//link
//https://leetcode.com/problems/single-number/description/
