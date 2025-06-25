let arr = [1,4,6,8,2,3,9,0]

function search(num){
    
for(let i=0 ; i<arr.length ; i++){
        if(arr[i] == num) return i  
    }
      return -1
}

console.log(search(1));

