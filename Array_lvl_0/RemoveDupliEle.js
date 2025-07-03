//Logic
function removeDupliEle(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
  }
  arr.length = i + 1;
  return arr;
}



//Tested

let arr = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3];
console.log(removeDupliEle(arr));


//practice
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/