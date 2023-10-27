class MinHeap {
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
        let endInx = this.heap.length - 1
        let leftinx = this.leftChild(currentindex)
        while (leftinx <= endInx) {
            let rightinx = this.rightchild(currentindex)
            let indexToChange;
            if (rightinx <= endInx && this.heap[rightinx] > this.heap[leftinx]) {
                indexToChange = rightinx
            } else {
                indexToChange = leftinx
            }
            if (this.heap[indexToChange] > this.heap[currentindex]) {
                this.swap(indexToChange, currentindex)
                currentindex = indexToChange
                leftinx = this.leftChild(currentindex)
            } else {
                return
            }
        }

    }
    shiftUp(currentindex) {
        let parentInx = this.parent(currentindex)
        while (parentInx > 0 && this.heap[parentInx]<this.heap[currentindex]){
            this.swap(currentindex,parentInx)
            currentindex=parentInx
            parentInx=this.parent(currentindex)
        }
    }
    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }
    remove(){
        this.swap(0,this.heap.length-1)
        this.heap.pop()
        this.shiftdown(0)
    }
    leftChild(i) {
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
    display() {
        for (let i = 0; i <= this.heap.length - 1; i++) {
            console.log(this.heap[i]);
        }
    }
}
let arr = [1, 2, 6 ]
let MIN = new MinHeap(arr)
MIN.insert(4)
// MIN.remove()
MIN.display()
