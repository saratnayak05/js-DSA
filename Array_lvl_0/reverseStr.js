//code
var reverseString = function(s) {
    // return s.reverse();


    let end=s.length-1;
    for(let i=0;i<s.length/2;i++){
        [s[i],s[end]]=[s[end],s[i]];
        end--;
    }
    return s;
};

// test
s = ["h","e","l","l","o"]
console.log(reverseString(s));

//practice 
//https://leetcode.com/problems/reverse-string/description/