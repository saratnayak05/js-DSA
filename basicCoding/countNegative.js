function countNegative(arr){
    let count=0;
    for(let i=0 ;i<arr.length; i++){
    if(arr[i]<0){
        count++;
    }
  }
  return count;
}

let arr =[5,-5,7,4,9,-11,45,-77];

console.log(countNegative(arr));