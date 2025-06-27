function countDigit(n){
     let count=0;
     while(n>0){
        n=Math.floor(n/10);
        count++;
       
     }
     return count;
}

let num=25236;

let ans = countDigit(num);
console.log(ans);