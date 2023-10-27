// function MergeSort(array){
//     if(array.length<=1){
//         return array
//     }
//     let middle=Math.floor(array.length / 2)
//     console.log(middle);
//     let leftarr=array.slice(0,middle)
//     console.log(leftarr);
//     let rightarr=array.slice(middle)
//     console.log(rightarr);
// return join( MergeSort(leftarr),MergeSort(rightarr))
// }

// function join(leftarr,rightarr){

//     let newArray1=[]
//     let i=0
//     let j=0
//     while(i < leftarr.length&& j < rightarr.length){ 
//      if(leftarr[i] <= rightarr[j]){
//          newArray1.push(leftarr[i++])
//      }else{
//         newArray1.push(rightarr[j++])
//      }
//     }
//     while(i < leftarr.length){
//         newArray1.push(leftarr[i++])
//     }
//     while(j < rightarr.length){
//         newArray1.push(rightarr[j++])
//     }
//     return newArray1
// }

// let array=[8,3,4,5,6,8,3,5,2,3]
// console.log(MergeSort(array));


// function mergesort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let middel=Math.floor(arr.length / 2)
//     console.log(middel); 
//     let leftarr=arr.slice(0,middel)
//     console.log(leftarr);
//     let rightarr=arr.slice(middel)
//     console.log(rightarr);

//     return JoiningArray(mergesort(leftarr),mergesort(rightarr))
// }

// function JoiningArray(leftarr,rightarr){
//     let Joinarr=[]
//     let i=0
//     let j=0
//     while(i < leftarr. length && j < rightarr.length){
//         if(leftarr[i] <= rightarr[j]){
//             Joinarr.push(leftarr[i++])
//         }else{
//             Joinarr.push(rightarr[j++])
//         }

//     }
//     while(i < leftarr.length){
//         Joinarr.push(leftarr[i++])      
//     }
//     while(j < rightarr.length){
//         Joinarr.push(rightarr[j++])
//     }
//     return Joinarr

// }


// let arr=[3,4,5,6,7,7]
// console.log(mergesort(arr));



// function mergersort2(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     console.log(mid);
//     let larr=arr.slice(0,mid)
//     let rarr=arr.slice(mid)

//     return jarr(mergersort2(larr), mergersort2(rarr))
// }

// function jarr(larr,rarr){
//     let newarr=[]
//     let i=0
//     let j=0

//     while(i < larr.length && j < rarr.length){
//         if(larr[i] <= rarr[j]){
//             newarr.push(larr[i++])
//         }else{
//             newarr.push(rarr[j++])
//         }
//     }
//     while(i < larr.length){
//         newarr.push(larr[i++])
//     }
//     while(j < rarr.length){
//         newarr.push(rarr[j++])
//     }
//     return newarr
// }

// let arr11=[3,4,5,6,7,7]
// console.log(mergersort2(arr11));


// function mergesot(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }

//     let midd = Math.floor(arr.length / 2)
//     let lefarr = arr.slice(0, midd)
//     let rigarr = arr.slice(midd)
//     return join(mergesot(lefarr),mergesot(rigarr))
// }

// function join(lefarr, rigarr) {
//     let newarray = []
//     let i = 0
//     let j = 0
//     while (i < lefarr.length && j < rigarr.length) {
//         if (lefarr[i] < rigarr[j]) {
//             newarray.push(lefarr[i++])
//         }else{
//             newarray.push(rigarr[j++])
//         }

//     }
//     while(i<lefarr.length){
//         newarray.push(lefarr[i++])
//     }
//     while(j<rigarr.length){
//         newarray.push(rigarr[j++])
//     }
//     return newarray
// }



// let arr = [4, 6, 3, 2, 1, 4, 6, 7, 8]
// console.log(mergesot(arr));

