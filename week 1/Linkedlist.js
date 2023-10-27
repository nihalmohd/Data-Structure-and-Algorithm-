class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }
        this.tail = newNode;
        console.log("New Node Added");
    }

    display() {
        if (this.head === null) {
            console.log("Empty")
            return
        }
        let temp = this.head
        while (temp !== null) {
            console.log(temp.data)
            temp = temp.next;
        }

    }

    remove(data) {
        let temp = this.head
        let prew = null
        if (temp !== null && temp.data === data) {
            this.head = temp.next
            return
        }
        while (temp !== null && temp.data !== data) {
            prew = temp;
            temp = temp.next
        }
        if (temp === null) {
            return
        }
        if (temp === this.tail) {
            this.tail = prew
            this.tail.next = null
            return;
        }
        prew.next = temp.next;
    }

    insertAfter(nextTo, data) {
        let temp = this.head
        let newNode = new Node(data)

        while (temp !== null && temp.data !== nextTo) {
            temp = temp.next
        }
        if (temp === null) {
            return;
        }
        if (temp === this.tail) {
            this.tail.next = newNode
            this.tail = newNode
            return;
        }
        newNode.next = temp.next
        temp.next = newNode
    }

    find(datas) {
        var temp = this.head
        if (temp == null) {
            console.log("empty");
            return
        }
       if (temp.data === datas){
            console.log(temp.data)
            console.log("this data is here");
            return
        }
        if(this.tail.data===datas){
            console.log(this.tail.data);
            console.log("this data is here");
            return
        }
        while(temp!==null&&temp.data!==datas){
            temp=temp.next
        }
        if(temp===null){
            console.log('no value')
        }else{
            console.log('value :'+temp.data)
        }
       
    }
}


const List = new LinkedList();
List.display()
List.add(10)
List.add(20)
List.add(30)
List.remove(30)
List.insertAfter(20, 40)
List.display()
List.find(70)

