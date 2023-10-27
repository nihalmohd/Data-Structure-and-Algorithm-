// function insertionSort(arr) {
//     for (i = 1; i <= arr.length-1; i++) {
//       let j=i-1
//       let Current=arr[i] 

//       while(j>=0&&arr[j]>Current){
//           arr[j+1] =arr[j]
//           j--
//       }
//       arr[j+1]=Current
//     }
//     return arr
// }

// let arr=[3,4,3,4,5,61,2,2,1,7]
// console.log(insertionSort(arr));




function insertionSort(arr){
    for(i=1;i<=arr.length-1;i++){
        let current=arr[i]
        let j=i-1

        while(j>=0&&arr[j]>=current){
           arr[j+1]=arr[j] 
           j--
        }
        arr[j+1]=current
        console.log(arr);   
    }
    return arr
}

let arr=[7,9,3,2,8,3]
console.log(insertionSort(arr),"fainal");