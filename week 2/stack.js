// class node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class stack{
//     constructor(){
//         this.top=null;
//     }
// push(data){
//     let newnode=new node(data)
//     if(this.top===null){
//         this.top=newnode
//     }else{
//        newnode.next=this.top
//        this.top=newnode
//     }
// }

// pop(){
//     if(this.top===null){
//         console.log("stack underflow");
//         return
//     }
//     this.top=this.top.next
// }

// display(){
//     let temp=this.top
//    while(temp!=null){
//     console.log(temp.data);
//     temp=temp.next
//    }
// }

// }

// const stackli=new stack()

// stackli.push(10)
// stackli.push(20)
// stackli.pop()
// stackli.display()





class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class stack{
    constructor(){
        this.top=null
    }
push(data){
    let Newnode=new Node(data)
    if(this.top===null){
        this.top=Newnode
    }else{
        Newnode.next=this.top
        this.top=Newnode
    }
}
pop(){
if(this.top===null){
    console.log("stack underflow");
    return
}
this.top=this.top.next
}
display(){
    let temp=this.top
 while(temp!==null){
    console.log(temp.data);
    temp=temp.next
 }

}

}

let Stack=new stack()
Stack.push(10)
Stack.push(20)
Stack.push(40)
Stack.pop()
Stack.display()


















