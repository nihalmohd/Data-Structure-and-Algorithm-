function mergeSort(arr) {
    if (arr.length <=1) {
        return arr
    }

    let middleIdx = Math.floor(arr.length / 2)
    console.log(middleIdx);
    let leftHalfArray = arr.slice(0, middleIdx)
    let rightHalfArray = arr.slice(middleIdx)
    
    return join(mergeSort(leftHalfArray),mergeSort(rightHalfArray))
}

function join(leftHalfArray, rightHalfArray) {
    let joinedArr = []
    let i = 0
    let j = 0
    while (i < leftHalfArray.length && j < rightHalfArray.length) {
        if (leftHalfArray[i] <= rightHalfArray[j]) {
            joinedArr.push(leftHalfArray[i++])
        } else {
            joinedArr.push(rightHalfArray[j++])
        }
    }
    while (i < leftHalfArray.length) {
        joinedArr.push(leftHalfArray[i++])
    }
    while (j < rightHalfArray.length) {
        joinedArr.push(rightHalfArray[j++])
    }
    return joinedArr
}

let arr = [2, 4, 6, 7, 3, 6, 8, 5, 3]
console.log(mergeSort(arr));