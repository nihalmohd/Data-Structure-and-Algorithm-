function QuickSort(arr){
    QuickSortHelper(arr,0,arr.length-1)
    return arr

}
function QuickSortHelper(arr,startIndex,endIndex){  
    if(startIndex>=endIndex){
        return
    }
    let pivotIndex=startIndex
    let leftIndex=startIndex+1
    let rightIndex=endIndex

    while(leftIndex<=rightIndex){
            if(arr[leftIndex]>arr[pivotIndex]&&arr[rightIndex]<arr[pivotIndex]){
              Swap(arr,leftIndex,rightIndex)
              leftIndex++
              rightIndex--
            }
            if(arr[leftIndex]<=arr[pivotIndex]){
                leftIndex++
            }
            if(arr[rightIndex]>=arr[pivotIndex]){
                rightIndex--
            }
    }  
   
    Swap(arr,rightIndex,pivotIndex)
    QuickSortHelper(arr,startIndex,rightIndex-1)
    QuickSortHelper(arr,rightIndex+1,endIndex)


}

function Swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

const arr= [3, 2, 1, 5, 4];
console.log(QuickSort(arr));