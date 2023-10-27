class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
class BinerySearch{
    constructor(){
        this.root=null
    }
    insert(data){
        let currentNode=this.root
        let newNode=new Node(data)
        if(currentNode===null){
            this.root=newNode
            return
        }
        while(true){
            if(data<currentNode.data){
                if(currentNode.left===null){
                    currentNode.left=newNode
                    break
                }else{
                    currentNode=currentNode.left
                }
            }else{
                if(currentNode.right===null){
                    currentNode.right=newNode
                    break
                }else{
                    currentNode=currentNode.right
                }

            }
        }
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
}


let bst=new BinerySearch()
bst.insert(10)
bst.insert(30)
bst.insert(5)
bst.inorder()