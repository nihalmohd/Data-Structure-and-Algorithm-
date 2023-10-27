class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}
class BinerySearchTree {
    constructor() {
        this.root = null
    }
    insert(data) {
        let newNode = new Node(data)
        let currentNode = this.root 
        if (currentNode === null) {
            this.root = newNode
            return
        }
        while (true) {
            if (data < currentNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = newNode
                    break
                } else {
                    currentNode = currentNode.left
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode
                    break
                } else {
                    currentNode = currentNode.right
                }

            }
        }
    }
    contains(data) {
        let currentNode = this.root
        while (currentNode !== null) {
            if (data < currentNode.data){
                currentNode=currentNode.left
            }else  if (data > currentNode.data){
                currentNode=currentNode.right
            }else{
                return true
            }
        }
        return false
    }
    inorder(){
        this.inorderHelper(this.root)
    }
    inorderHelper(node){
        if(node!==null){
            this.inorderHelper(node.left)
            console.log(node.data);
            this.inorderHelper(node.right)
        }
    }
    preorder(){
        this.preorderHelper(this.root)
    }
    preorderHelper(node){
        if(node!==null){
            console.log(node.data);
            this.preorderHelper(node.left)
            this.preorderHelper(node.right)
        }
    }
    postOrder(){
        this.postOrderHelpet(this.root)
    }
    postOrderHelpet(node){
        if(node!==null){
            this.postOrderHelpet(node.left)
            this.postOrderHelpet(node.right)
            console.log(node.data);

        }
    }
    getMnValue(node){
      if(node.left===null){
        return node.data
      }else{
        return this.getMnValue(node.left)
      }
        
    }
}
let BinerySearch=new BinerySearchTree()
BinerySearch.insert(10)
BinerySearch.insert(20)
BinerySearch.insert(40)
BinerySearch.insert(50)
BinerySearch.insert(60)
BinerySearch.insert(70)
BinerySearch.insert(80)
BinerySearch.insert(90)
// BinerySearch.inorder()
// BinerySearch.preorder()
BinerySearch.postOrder()
// console.log(BinerySearch.getMnValue(BinerySearch.root));
console.log(BinerySearch.contains(30));


