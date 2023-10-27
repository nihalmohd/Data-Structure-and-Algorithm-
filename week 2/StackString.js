// class stack{
//     constructor(){
//         this.array=[]
//     }

//    push(data){
//     this.array.push(data)
//    }
//    pop(){
//         return this.array.pop();
//     }
   
 
// }


// const stack1=new stack()
// let a="nihal"
// for(i=0;i<a.length;i++){
//     stack1.push(a[i])
// }
// for(i=0;i<a.length;i++){
//     console.log(stack1.pop())
// }





// class Stack {
//     constructor() {
//       this.array = [];
//     }
  
//     push(data) {
//       this.array.push(data);
//     }
  
//     pop() {
//       return this.array.pop();
//     }
//   }
  
//   const stack1 = new Stack();
//   let a = "nihal";
//   for (let i = 0; i < a.length; i++) {
//     stack1.push(a[i]);
//   }
  
//   let reversedString = '';
//   for (let i = 0; i < a.length; i++) {
//     reversedString += stack1.pop();        
//   }
  
//   console.log(reversedString);

class stack{
  constructor(){
    this.stack1=[]
  }
push(data){
  this.stack1.push(data)
}
pop(){
return this.stack1.pop()
}
// display(){
//   console.log(this.stack1.toString());
// } 

}


const stack12=new stack()
let string="nihallllll"

for(i=0;i<string.length;i++){
  stack12.push(string[i])
}
// stack12.display()
let reversedString=""
for(j=0;j<string.length;j++){
 reversedString+= stack12.pop()
}
console.log(reversedString);

