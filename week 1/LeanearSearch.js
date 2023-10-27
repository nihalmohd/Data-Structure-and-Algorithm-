function lenearSerch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

let arr=[3,2,4,5,6,7,8]
let target=9

console.log(lenearSerch(arr,target));