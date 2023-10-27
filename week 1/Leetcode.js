
var y=-121
let x=y.toString()
console.log(x);


var isPalindrome = function(x) {
    for(i=0;i<x.length/2;i++){
         if(x[i]===x[x.length-1]){
            x.length-- 
         }else{
             return false
         }
       } 
       return true
};


console.log(isPalindrome(x))