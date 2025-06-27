let arr = [-12,-21,-2]

//largest number

function largestNum(arr) {
  if (arr.length === 0) {
    return "bolo kesa check karu largest nummber";
  }

  let largestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}
console.log(smallestNum(arr));

//smallest number

function smallestNum(arr) {
  if (arr.length === 0) {
    return "bolo kesa check karu largest  nummber";
  }

  let smallestNum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
}

console.log(smallestNum(arr));

//smallest and second smallest 

function smallestandSecondSmallest(arr) {

  if (arr.length < 2) return [-1];

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest !== Infinity? [smallest, secondSmallest] : [-1];
}

console.log(smallestandSecondSmallest(arr));

//daily problem:
//gfg:  https://www.geeksforgeeks.org/problems/largest-element-in-array40090    
//gfg: https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1
//gfg: https://www.geeksforgeeks.org/problems/find-transition-point-1587115620/1
