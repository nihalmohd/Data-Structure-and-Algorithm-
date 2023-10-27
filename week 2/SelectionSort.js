function SelectionSort(arr){
let n=arr.length
for ( i=0 ;i <n-1; i ++){
     for(j=i+1;j <n; j ++){
        if(arr[i]>arr[j]){
            const temp=arr[j]
            arr[j]=arr[i]
            arr[i]=temp
        }
     }
}
return arr
}
let arr=[1, 2, 3, 5, 4];
console.log(SelectionSort(arr));