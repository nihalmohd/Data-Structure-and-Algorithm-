class node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class dlLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const newNode = new node(data);

        if (this.head === null) {
            this.head = newNode
        } else {

            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
        //  console.log('new node added')
    }

    // insertbefore(nextTo,data){
    //     const newNode=new node(data)
    //     let temp=this.head

    //     if(temp!==null&&temp.data===nextTo){
    //         this.head=newNode
    //         newNode.next=temp
    //     }
    //     while(temp!==null&&temp.data!==nextTo){
    //         temp=temp.next
    //     }
    //   if(temp!==null){
    //     newNode.prev=temp.prev
    //     newNode.next=temp
    //     temp.prev.next=newNode
    //     temp.prev=newNode

    //   }else{
    //     console.log("Null");
    //   }
    // }

    insertAfter(nextTo, data) {
        let temp = this.head
        let newNode = new node(data)

        while (temp !== null && temp.data !== nextTo) {
            temp = temp.next
        }
        if(temp===null){
            console.log("empty");
            return
        }
        if(temp===this.tail){
            // newNode.prev.next=this.tail.next
            this.tail.next=newNode
            this.tail=newNode
            return
        }
        newNode.next=temp.next
        temp.next=newNode
        newNode.prev=temp
    }

    remove(data){
      let temp=this.head
      if(temp.data===data){
        this.head=temp.next
        return;
      }
      while(temp!==null&&temp.data!==data){
          temp=temp.next
      }
      if(temp===null){
        console.log("empty");
        return
      }
      if(temp===this.tail){
        this.tail=temp.prev
      }
     temp.prev.next=temp.next
    }

    display() {
        let temp = this.head
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next
        }
    }

    // displayreverse(){
    //     let temp=this.tail
    //     while(temp!==null){
    //      console.log(temp.data); 
    //      temp=temp.prev
    //     }
    // }
}

const List = new dlLinkedList()
List.add(10)
List.add(20)
List.add(30)
// List.insertbefore(50,40)
List.insertAfter(30,50)
List.remove(30)
List.remove(50)
List.display()
// List.displayreverse()