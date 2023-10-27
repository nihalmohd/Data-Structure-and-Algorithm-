class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class likedList{
    constructor(){
        this.head=null
        this.tail=null
    }
add(data){
    let newNode=new Node(data)
    if(this.head===null){
        this.head=newNode
    }else{
        this.tail.next=newNode
    }
    this.tail=newNode
}
display(){
    let temp=this.head
    if(temp===null){
        console.log("empty");
        return
    }
   while(temp!==null){
    console.log(temp.data);
    temp=temp.next
   }
}

}

let list=new likedList()
list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.display()
