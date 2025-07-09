function factorial(num) {
    if(num === 1) return 1;
    return num*factorial(num-1);
}

let num=5;
console.log(`factorial of ${num} is ${factorial(num)}`);