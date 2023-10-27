class Queue{
    constructor(){
        this.arr=[]
    }
    enqueue(data){
        this.arr.push(data)
    }
    dequeue(){
        return this.arr.shift()
    }
    isEmpty(){
        return this.arr.length===0
    }
    peek(){
        if(!this.isEmpty()){
            return this.arr[0]
        }
        return null
        
    }
    size(){
        return this.arr.length
    }
    
    print(){
        console.log(this.arr.toString());
    }
}

let queue=new Queue()
console.log(queue.isEmpty());
queue.enqueue(82)
queue.enqueue(44)
queue.enqueue(56)
queue.enqueue(21)
console.log(queue.dequeue());
queue.print()
console.log(queue.size());
console.log(queue.peek());
