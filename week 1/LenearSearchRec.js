function lenearSearchRec(arr, target, i = 0) {
    if(i>=arr.length){
    return-1
    }
    if (arr[i] === target) {
        return i
    } else {
        return lenearSearchRec(arr, target, i + 1)
    }
}

let arr = [3, 2, 4, 5, 6, 7, 8]
let target = 8

console.log(lenearSearchRec(arr, target));