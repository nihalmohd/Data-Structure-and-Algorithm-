const arr=[3,2,3,3,4,5,3,2,3,1,4,3]
 
const T=3
j=arr.length-1

function change(arr,t){
   for(i=0;i<arr.length/2;i++){
   
    if(arr[j]===t&&arr[i]===t){
        temp  = arr[j]
        arr[j]=arr[j-1]
        arr[j-1]=temp
    }
    if(arr[i]===t){
        temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      j--
    }
    
   } 
    return arr
}

console.log(change(arr,T));


//Time complexity=O(n)
//Space complexity=O(1)
