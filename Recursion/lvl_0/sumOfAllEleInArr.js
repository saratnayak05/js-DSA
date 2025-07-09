// sum of all element in array

function sumArray(arr, index=0) {
    if (index === arr.length) return 0; // base case
    return arr[index] + sumArray(arr, index + 1); // recursive call
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15


//sum of all odd number in array

function oddNum(arr,index=0){
    if(index === arr.length) return 0;
    return arr[index] % 2 !== 0? arr[index] +oddNum(arr,index+1) :  oddNum(arr,index+1);
        
}

const arr = [1, 2, 3, 4, 5,6,11];
console.log(oddNum(arr)); // Output: 9
