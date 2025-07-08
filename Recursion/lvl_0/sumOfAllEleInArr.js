// sum of all element in array

function sumArray(arr, index=0) {
    if (index === arr.length) return 0; // base case
    return arr[index] + sumArray(arr, index + 1); // recursive call
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15