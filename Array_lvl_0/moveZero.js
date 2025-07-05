//move zero leetcode problem

var moveZeroes = function (nums) {
  //   let j=0;
  // for(let i=0;i<nums.length;i++){
  //     if(nums[i]!==0){
  //         if(i !== j){
  //             [nums[j],nums[i]]=[nums[i],nums[j]];
  //         }
  //         j++;
  //     }
  // }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }
  while (j < nums.length) {
    nums[j++] = 0;
  }

  return nums;
};

//test
nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));

//link
//https://leetcode.com/problems/move-zeroes/description/?envType=problem-list-v2&envId=array
