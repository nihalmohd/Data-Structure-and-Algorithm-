class MinHeap {
    heap = new Array()
    constructor(arr) {
        this.BuildHeap(arr)
    }
    BuildHeap(arr) {
        this.heap = arr
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.ShiftDown(i)
        }
    }
    ShiftDown(index) {
        // let currentInx = index
        let endInx = this.heap.length - 1
        let leftInx = this.LeftChild(index)
        while (leftInx <= endInx) {
            let rightInx = this.rightChild(index)
            let indexToShift;
            if (rightInx <= endInx && this.heap[rightInx] < this.heap[leftInx]) {
                indexToShift = rightInx
            } else {
                indexToShift = leftInx
            }
            if (this.heap[index] > this.heap[indexToShift]) {
                this.swap(index, indexToShift)
                index = indexToShift
                leftInx = this.LeftChild(index)
            } else {
                return
            }
        }
    }

    ShiftUp(index) {
        let parentInx =this.Parent(index)
        while (index > 0 && this.heap[parentInx] > this.heap[index]) {
            this.swap(index, parentInx)
            index = parentInx
            parentInx = parent(index)
        }
    }
    peek() {
        if (this.heap.length === 0) {
            console.log("Heap is Empty");
        }
        return this.heap[0]
    }
    remove() {
        this.swap(0, this.heap.length - 1)
        this.heap.pop()
        this.ShiftDown(0)
    }
    insert(data) {
        this.heap.push(data)
        this.ShiftUp(this.heap.length - 1)
    }

    LeftChild(i) {
        return (i * 2) + 1
    }
    rightChild(i) {
        return (i * 2) + 2
    }
    Parent(i) {
        return Math.floor((i - 1) / 2)
    }

    swap(i, j) {
    [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    display() {
        for (let i = 0; i <= this.heap.length-1; i++) {
            console.log(this.heap[i]);
        }
    }

}

let arr = [6, 2, 8]
let Heap = new MinHeap(arr)
// Heap.display()
Heap.insert(9)
Heap.insert(29)
Heap.insert(19)
Heap.insert(39)
Heap.insert(13)
Heap.insert(9)
Heap.remove()
Heap.display()


