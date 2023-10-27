class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
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
console.log("node added");
}

find(){
    let temp=this.head
    while(temp!==null){
        let currentnode=temp.next
         while(currentnode!==null&&currentnode.data===temp.data){
            currentnode=currentnode.next      
        }
        temp.next=currentnode
        if(currentnode===this.tail&&temp.data===currentnode.data){
            this.tail=currentnode
            this.tail.next=null
        }
        temp=currentnode  
    }
}

display(){
    let temp=this.head
    while(temp!==null){
        console.log(temp.data);
        temp=temp.next
    }
}

}


let List=new LinkedList()

List.add(6)
List.add(10)
List.add(5)
List.add(5)
List.add(5)
List.add(8)
List.add(8)
List.find()
List.display() 

