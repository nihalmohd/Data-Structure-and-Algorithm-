// class MinHeap{
//      heap=new Array();
//      constructor(arr){
//         this.BuildHeap(arr)
//      }
//      BuildHeap(arr){
//         this.heap=arr
//         for(let i = Math.floor(this.heap.length/2)-1; i >=0 ; i--){
//             this.shifTdown(i)
//         }
//      }
//      shifTdown(currentInx){
//         let endInx=this.heap.length-1
//         let leftInx=this.leftChild(currentInx)
//         while(leftInx<=endInx){
//             let rightInx=this.rightChild(currentInx)
//             let idxToShift;
//             if(rightInx<endInx && this.heap[rightInx]>this.heap[leftInx]){
//                 idxToShift=rightInx
//             }else{
//                 idxToShift=leftInx
//             }
//             if(this.heap[currentInx]<this.heap[idxToShift]){
//                 this.swap(currentInx,idxToShift)
//             }else{
//                 break
//             }
//         }
//      }
//      leftChild(i){
//         return (i*2)+1
//      }
//      rightChild(i){
//         return(i*2)+2
//      }
//      parent(i){
//         return Math.floor((i-1)/2)
//      }
//      swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//      }
//      displalay(){
//         for(let i = 0 ; i <= this.heap.length-1 ; i ++){
//             console.log(this.heap[i]);
//         }
//      }

// }
// let arr=[3,2,5,67,3,5]
// let min=new MinHeap(arr)
// min.displalay()


class MaxHeap{
    heap=new Array()
    constructor(arr){
    this.buildHeap(arr)
    }
    
    buildHeap(arr){
        this.heap=arr
        this.n=this.heap.length-1
        for(let i = Math.floor(this.n/2) ; i >=0 ; i--){
            this.ShiftDown(i)
        }
        while(this.n>0){
            this.swap(this.n,0)
            this.n--
            this.ShiftDown(0)
        }
    }
    ShiftDown(index){
        let endInx=this.n
        let leftInx=this.leftChild(index)
        while(leftInx<=endInx){
            let rightInx=this.rightChild(index)
            let idxToShift;
            if(rightInx<=endInx && this.heap[rightInx]>this.heap[leftInx]){
                idxToShift=rightInx
            }else{
                idxToShift=leftInx
            }
            if(this.heap[index]<this.heap[idxToShift]){
                this.swap(index,idxToShift)
            }else{
                break
            }
        }
    }
    leftChild(i){
        return (i*2)+1
    }
    rightChild(i){
        return (i*2)+2
    }
    Parent(i){
        return Math.floor((i-1)/2)
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    diplay(){
        for(let i = 0 ; i <= this.n ; i++){
            console.log(this.heap[i]);
        }
    }
}
let arr=[4,2,1,54,3,2,3]
let Max=new MaxHeap(arr);
Max.diplay()
