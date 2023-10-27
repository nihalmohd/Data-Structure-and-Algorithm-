// const arr = [9,3,2,4,5]
// const T=5

//   function result(arr,T){
//     for(i=0;i<arr.length-1;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===T){
//                 return [arr[i],arr[j]]
//             }
//         }
//        }
//        return[];
    
//   }

//   console.log(result(arr,T))


//Another Way to do This One

// const arr = [9,3,2,4,5]
// const T=5

//   function result(arr,T){
//     const nums=new Set();
//     for(i=0;i<arr.length;i++){
//        const match=T-arr[i]
//        if(nums.has(match)){
//         return [match,arr[i]]
//        }else{
//         nums.add(arr[i])
//        }
//        }
//        return[];
    
//   }

//   console.log("Another Way correct",result(arr,T))


const arr=[1,2,3,4,6,9,8,5,4,3,2,1]
n=arr.length
for(i=0;i<n;i++){
   for(j=i+1;j<n;j++){ 
       if(arr[i]==arr[j]){
        for(k=i;k<n;k++){
          arr[k]=arr[k+1];
        }
    n=n-1
    i--
       }
   }

}
for(i=0;i<n;i++){
  console.log(arr[i]);
}







