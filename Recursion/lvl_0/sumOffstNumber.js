function sumOfnumber(n){
    if(n==0) return 0;
    return n+sumOfnumber(n-1);



}

console.log(sumOfnumber(5));