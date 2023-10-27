function BinerySearch(arr,target){
   let  startIdx=0
    let EndIdx=arr.length-1
while(startIdx<=EndIdx){
    let middle=Math.floor(startIdx+(EndIdx-startIdx)/2)

    if(arr[middle]===target){
        return middle        
    }else if(arr[middle]> target){
        EndIdx=middle-1
    }else
        startIdx=middle+1
}
return -1
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(BinerySearch(arr, 7));