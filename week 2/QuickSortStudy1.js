function QuickSortStudy(){
    QuicksortHelper(array,0,array.length-1)
    return array
}
function QuicksortHelper(array,startinx,endinx){
    if(startinx>=endinx){
        return 
    }
    let pivot=startinx
    let leftinx=startinx+1
    let rightinx=endinx

    while(leftinx<=rightinx){

        if(array[leftinx]>=array[pivot]&&array[rightinx]<=array[pivot]){
          swap(array,leftinx,rightinx)
          leftinx++
          rightinx--
        }
        if(array[leftinx]<=array[pivot]){
          leftinx++
        }
        if(array[rightinx]>=array[pivot]){
            rightinx--
        }
    }
    swap(array,rightinx,pivot)
    QuicksortHelper(array,startinx,rightinx-1)
    QuicksortHelper(array,rightinx+1,endinx)




}
function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}



let array=[4,5,6,4,3,2,1,4,2]
console.log(QuickSortStudy(array));