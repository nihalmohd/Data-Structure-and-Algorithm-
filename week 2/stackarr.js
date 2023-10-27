class stack{
    constructor(){
        this.item=[]
    }

push(data){
    this.item.push(data)
}

pop(){
this.item.pop()
}

peek(){
    return this.item[this.item.length-1]
}

display(){
    console.log(this.item.toString());
}
isempty(){
    return this.item.length===0
}
size(){
    return this.item.length
}

}



let Stack=new stack()
Stack.push(39)
Stack.push(10)
Stack.push(65)
Stack.pop()
Stack.display()

console.log(Stack.peek());
console.log(Stack.isempty());
console.log(Stack.size());

