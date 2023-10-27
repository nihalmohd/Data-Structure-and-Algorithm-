// function Quicksort(arr) {
//     QuickSortHelper(arr, 0, arr.length - 1)
//     return arr
// }

// function QuickSortHelper(arr, startindex, endIndex) {
//     if(startindex>=endIndex){
//         return
//     }
//     let pivot = startindex
//     let leftIndex = startindex + 1
//     let rightIndex = endIndex

//     while (leftIndex <= rightIndex) {
//         if (arr[leftIndex] > arr[pivot] && arr[rightIndex] < arr[pivot]) {
//             swap1(arr, leftIndex, rightIndex)
//             leftIndex++
//             rightIndex--
//         }
//         if (arr[leftIndex] <= arr[pivot]) {
//             leftIndex++
//         }
//         if (arr[rightIndex] >= arr[pivot]) {
//             rightIndex--
//         }

//     }
//     swap1(arr, rightIndex, pivot)
//     QuickSortHelper(arr, startindex,rightIndex-1)
//     QuickSortHelper(arr, rightIndex+1,endIndex)
// }


// function swap1(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }


// let arr = [3, 7, 9, 5, 5, 8, 9, 0]
// console.log(Quicksort(arr));




// function Quick(arr) {
//     QuickHelper(arr, 0, arr.length - 1)
//     return arr
// }
// function QuickHelper(arr, starInx, endInx) {
//     if (starInx >= endInx) {
//         return
//     }
//     let pivot = starInx
//     let leftInx = starInx + 1
//     let rightInx = endInx
//     while (leftInx <= rightInx) {
//         if (arr[leftInx] > arr[pivot] && arr[rightInx] < arr[pivot]) {
//             swap1(arr, leftInx, rightInx)
//             leftInx++
//             rightInx--
//         }
//         if (arr[leftInx] <= arr[pivot]) {
//             leftInx++
//         }
//         if (arr[rightInx] >= arr[pivot]) {
//             rightInx--
//         }
//     }
//     swap1(arr, rightInx, pivot)
//     QuickHelper(arr, starInx, rightInx - 1)
//     QuickHelper(arr, rightInx + 1, endInx)


// }
// function swap1(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }




// let arr = [8, 3, 5, 2, 6, 8, 9]
// console.log(Quick(arr));



// function quicksort(arr){
// quickhelper(arr,0,arr.length-1)
// return arr
// }
// function quickhelper(arr,start,end){
//     if(start>=end){
//         return
//     }
//     let pivot=start
//     let leftInx=start+1
//     let rightinx=end

//     while(leftInx<=rightinx){
//         if(arr[leftInx]>arr[pivot]&&arr[rightinx]<arr[pivot]){
//             swap(arr,leftInx,rightinx)
//             leftInx++
//             rightinx--
//         } if(arr[leftInx]<=arr[pivot]){
//             leftInx++
//         }
//         if(arr[rightinx]>=arr[pivot]){
//             rightinx--
//         }
//      }     
//     swap(arr,rightinx,pivot)
//     quickhelper(arr,start,rightinx-1)
//     quickhelper(arr,rightinx+1,end)
    
// }



// function swap(arr,i,j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
// }


// function insterionsort(arr){
//     for(i=1;i<=arr.length-1;i++){
//     let current=arr[i]
//     let j=i-1
//     while(j>=0&&arr[j]>=current){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=current
//     }
//     return arr
// }


// let arr=[3,4,2,5,7,2,3,1]
// console.log(insterionsort(arr));


// function insertionSort(arr){
//     for(i=1;i<arr.length-1;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }

// const arr=[3,2,5,6,2,7,8,6]
// console.log(insertionSort(arr));


// function bubbleSort(arr){
//     n=arr.length
//     for(let  i=0;i<n-1;i++){
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                let temp=arr[j+1]
//                arr[j+1]=arr[j]
//                arr[j]=temp
//             }
//         }
//     }
//     return arr
// }
// const arr=[3,2,5,6,2,7,8,6]
//  console.log(bubbleSort(arr));