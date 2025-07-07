//268. Missing Number

//using sort method
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    for(let i=0;i<=nums.length;i++){
        if(i!==nums[i]) return i;
    }
};



//without sort or using mathmetical way
var missingNumber = function(nums) {
   
   let n=nums.length;
   let totalSum= n*(n+1)/2;

   let numSum = 0;
   for(let i=0; i<nums.length; i++){
    numSum+=nums[i];
   }
   return totalSum-numSum;

};




//test
let nums=[3,0,1];
console.log(missingNumber(nums));