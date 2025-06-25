function largestNum(arr) {
  if (arr.length < 2) {
    return "bolo kesa check karu largest ak nummber die ho";
  }

  let largestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

let arr = [4, 5, 7, 8, 12, 56, 3, 1];

console.log(smallestNum(arr));


function smallestNum(arr) {
  if (arr.length < 2) {
    return "bolo kesa check karu largest ak nummber die ho";
  }

  let smallestNum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
}
