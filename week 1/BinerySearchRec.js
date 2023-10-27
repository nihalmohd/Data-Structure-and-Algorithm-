function BinerySearch(arr, target) {
    return BineryRecHelper(arr, target, 0, arr.length - 1)
}
function BineryRecHelper(arr, target, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return -1
    }
    let middle = parseInt(startIndex + (endIndex - startIndex) / 2)
    if (arr[middle] === target) {
        return middle
    } else if (arr[middle] > target) {
        return BineryRecHelper(arr, target, startIndex,middle-1) 
    } else
    return BineryRecHelper(arr, target, middle+1,endIndex) 
        
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(BinerySearch(arr, 7));