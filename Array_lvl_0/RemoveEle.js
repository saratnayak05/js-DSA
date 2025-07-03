//logic

var removeElement = function(nums, val) {
     let k=0;
     for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[k++]=nums[i];
          
        }
     }
     return nums;
    }


//test
let arr =[1,2,4,4,2,6,12,9,2,8];
console.log(removeElement(arr,4));

//practice
//https://leetcode.com/problems/remove-element/