class Node{
    constructor(data){
        this.data=data 
        this.next=null
    }
}
class LikkedList{
    constructor(){
        this.head=null
        this.tali=null
    }

add(data){
    const newNode=new Node(data)

    if(this.head===null){
       this.head=newNode
    }else{
        this.tali.next=newNode
    }
    this.tali=newNode 
}


// display(){
//     let sum=0
// if(this.head===null){
//     console.log("head Is Null");
//     return
// }
// let temp=this.head
// while(temp!==null){
//     sum+=temp.data
//     temp=temp.next
// }
// console.log('SUM:',sum);
// }



display() {
    let sum = 0;
    let count = 1; // Keep track of the current node index
  
    if (!this.head) {
      console.log("Head Is Null");
      return;
    }
  
    let temp = this.head;
    sum += temp.data; // Add the first node's data to the sum
    temp = temp.next; // Move to the second node
  
    while (temp) {
      if (count % 3 === 0) { // Include only every third node in the sum
        sum += temp.data;
        console.log(temp.data);
        count = 1; // Reset the count after including a third node
      } else {
        count += 1; // Increment the count if the node is not included in the sum
      }
      temp = temp.next;
    }
  
    console.log("Sum of every third node:", sum);
  }
 
}

let link=new LikkedList()
link.add(2)
link.add(3)
link.add(4)
link.add(5)
link.add(6)
link.add(7)
link.add(8)
link.add(9)
link.add(9)
link.add(5)
link.add(6)
link.add(5)
link.add(4)
link.display()