// function mergesot(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }

//     let midd = Math.floor(arr.length / 2)
//     let lefarr = arr.slice(0, midd)
//     let rigarr = arr.slice(midd)
//     return join(mergesot(lefarr),mergesot(rigarr))
// }

// function join(lefarr, rigarr) {
//     let newarray = []
//     let i = 0
//     let j = 0
//     while (i < lefarr.length && j < rigarr.length) {
//         if (lefarr[i] < rigarr[j]) {
//             newarray.push(lefarr[i++])
//         }else{
//             newarray.push(rigarr[j++])
//         }

//     }
//     while(i<lefarr.length){
//         newarray.push(lefarr[i++])
//     }
//     while(j<rigarr.length){
//         newarray.push(rigarr[j++])
//     }
//     return newarray
// }



// let arr = [4, 6, 3, 2, 1, 4, 6, 7, 8]
// console.log(mergesot(arr));




//////////////////////  MergeSort Over  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// function Quicksort(arr) {
//     hellper(arr, 0, arr.length - 1)
//     return arr
// }

// function hellper(arr, srt, end) {
//     if (srt >= end) {
//         return
//     }
//     let pivotinx = srt
//     let lefinx = srt + 1
//     let riginx = end

//     while (lefinx <= riginx) {
//         if (arr[lefinx] > arr[pivotinx] && arr[riginx]<arr[pivotinx]) {
//             swap(arr, lefinx, riginx)
//             lefinx++
//             riginx--
//         }
//         if (arr[ lefinx] <= arr[pivotinx]) {
//             lefinx++
//         }
//         if (arr[riginx] >= arr[pivotinx]) {
//             riginx--
//         }

//     }
//     swap(arr,riginx,pivotinx)
//     hellper(arr, srt, riginx - 1)
//     hellper(arr, riginx + 1, end)

// }
// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

// let arr = [3, 4, 2, 3, 1, 1, 4, 6, 4, 5]
// console.log(Quicksort(arr));




/////////////////////////////////////////   Quick Sort Over    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// function bubblesort(arr) {
//     let n = arr.length
//     for (let i = 0; i < n - 1; i++) {
//         for (j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }

//         }
//     }
//     return arr
// }

// let arr = [3, 24, 5, 6, 2]
// console.log(bubblesort(arr));




///////////////////////////////////     Bubble sort     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// function insertionsort(arr){
//     for(i=1;i<arr.length-1;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>=current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }


// let arr=[3,6,7,8,8]
// console.log(insertionsort(arr));





//////////////////////////////////     stack in arrey     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// class stack{
//     constructor(){
//         this.stack1=[]
//     }
//     push(data){
//         this.stack1.push(data)
//     }
//     pop(){
//        return this.stack1.pop()
//     }
//     isEmpty(){
//        return this.stack1.length===0
//     }
//     peek(){
//         return this.stack1[this.stack1.length-1]
//     }
//     display(){
//         console.log(this.stack1.toString);
//     }

// }

