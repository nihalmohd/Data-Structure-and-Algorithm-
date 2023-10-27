function BubbleSort(arr){
    let n=arr.length
for(i = 0;i < n-1; i++){
    for(j = 0 ; j < n-i-1; j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=temp
        } 
    }
    console.log(arr);
}
return arr
}

const arr=[3,2,4,5,4,3,8,9,0]
console.log(BubbleSort(arr)); 
