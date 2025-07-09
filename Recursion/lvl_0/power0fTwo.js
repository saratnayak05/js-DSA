//231. Power of Two

var isPowerOfTwo = function (n) {
  // if (n <= 0) return false;
  // if(n==1) return true;
  // if(n%2=== 0){
  //     return isPowerOfTwo(n/2)
  // }else{
  //     return false;
  // }

  if (n <= 0) return false;
  return !(n & (n - 1));
};

//test case
let n = 16;
console.log(isPowerOfTwo(n));

// link
// https://leetcode.com/problems/power-of-two/description/
