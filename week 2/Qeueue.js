class node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }
enqueue(data){
    let newNode=new node(data)
    if(this.rear===null){
        this.front=this.rear=newNode
    }else{
         this.rear.next=newNode
         this.rear=newNode
    }
}

dequeue(){
    if(this.front===null){
        console.log("Empty");
    return
    }
     this.front=this.front.next
     if(this.front===null){
        this.rear=null
     }
}

display(){
    let temp=this.front
    if(temp===null){
        console.log("This List Is Empty");
        return
    }
    while(temp!==null&&temp!==null){
        console.log(temp.data);
        temp=temp.next
    }
}
}

let queue=new Queue()
queue.enqueue(200)
queue.enqueue(500)
queue.enqueue(400)
queue.dequeue()
queue.display()
