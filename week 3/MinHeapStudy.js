class Minheap {
    heap = new Array()
    constructor(arr) {
        this.buildHeap(arr)
    }
    buildHeap(arr) {
        this.heap = arr
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.shiftdown(i)
        }
    }
    shiftdown(currentindex) {
        let endinx = this.heap.length - 1
        let leftinx = this.leftchild(currentindex)
        while (leftinx <= endinx) {
            let rightinx = this.rightchild(currentindex)
            let indexToShift;
            if (rightinx <= endinx && this.heap[rightinx] < this.heap[leftinx]) {

                indexToShift = rightinx
            } else {
                indexToShift = leftinx
            }
            if (this.heap[currentindex] > this.heap[indexToShift]) {
                this.swap(currentindex, indexToShift)
                currentindex = indexToShift
                leftinx = this.leftchild(currentindex)
            } else {
                return
            }
        }
    }
    shiftUp(currentindex) {
        let parentInx = this.parent(currentindex)
        while (currentindex > 0 && this.heap[parentInx] > this.heap[currentindex]){
            this.swap(currentindex,parentInx)
            currentindex=parentInx
            parentInx=this.parent(currentindex)
        }
    }
    Insert(value){
        this.heap.push(value)
      this.shiftUp(this.heap.length-1)
    }
    remove(){
        this.swap(0,this.heap.length-1)
        this.heap.pop()
        this.shiftdown(0)
    }
    leftchild(i) {
        return (i * 2) + 1
    }
    rightchild(i) {
        return (i * 2) + 2
    }
    parent(i) {
        return Math.floor((i - 1) / 2)
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    display(){
        for(let i = 0 ; i <= this.heap.length-1 ; i++){
            console.log(this.heap[i]);
        }
    }
}
let arr = [3, 2, 5]
let Heap = new Minheap(arr)
Heap.display()
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
Heap.Insert(13)
Heap.Insert(1)
Heap.remove()
Heap.display()