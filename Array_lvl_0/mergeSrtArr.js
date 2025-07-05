//88.merge sorted array

//better opproch but not optimal because space complexity it use extra array O(m+n) time complexity O(m+n)
// var merge = function(nums1, m, nums2, n) {
//     let p1=0;
//     let p2=0;
//     nums1Copy=nums1.slice(0,m);
//     for(let i=0;i<m+n;i++){
//         if(p2>=n|| (p1<m && nums1Copy[p1]<nums2[p2])){
//             nums1[i]=nums1Copy[p1];
//             p1++;
//         }
//         else{
//             nums1[i]=nums2[p2];
//             p2++;
//         }
//     }
// };

//optimal approch same time complexity and O(1) space complexity
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};

//test
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
