class MaxHeap{
    heap=new Array()
    constructor(arr){
        this.buildHeap(arr)
    }
    buildHeap(arr){
        this.heap=arr
        for(let i = Math.floor(this.heap.length/2 ) -1 ; i >=0 ; i--){
            this.shiftDown(i)
        }
    }
    shiftDown(currentindex){
        let endInx=this.heap.length-1
        let leftinx= this.leftChld(currentindex)
        while(leftinx<=endInx){
            let rightInx=this.rightChild(currentindex)
            let indexToShift;
            if(rightInx <= endInx && this.heap[rightInx]>this.heap[leftinx]){
                indexToShift=rightInx
            }else{
                indexToShift=leftinx
            }
            if(this.heap[currentindex]<this.heap[indexToShift]){
                this.swap(currentindex,rightInx)
                currentindex=indexToShift
                leftinx=this.leftChld(currentindex)
            }else{
                break
            }
        }
    }
    shiftUp(currentindex){
        let parent=this.parent(currentindex)
        while(parent > 0 && this.heap[parent]<this.heap[currentindex]){
            this.swap(parent,currentindex)
            currentindex=parent
            parent=this.parent(currentindex)
        }
    }
    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }
    leftChld(i){
        return(i*2)+1
    }
    rightChild(i){
        return (i*2)+2
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    display(){
        for( let i = 0 ;i <= this.heap.length-1 ; i++){
            console.log(this.heap[i]);
        }
    }
}
let arr=[12,34,54,23,45]
let Max=new MaxHeap(arr)
Max.display()
console.log("haaaaaaaaaa");A
Max.insert(43)
Max.display()