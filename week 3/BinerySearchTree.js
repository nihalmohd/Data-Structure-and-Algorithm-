class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BinerySearchTree {
    constructor() {
        this.root = null
    }
    Insert(data) {
        let newnode = new Node(data)
        let current = this.root
        if (current === null) {
            this.root = newnode
            return
        }
        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newnode
                    break
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = newnode
                    break
                } else {
                    current = current.right
                }

            }
        }
    }
    contains(data) {
        let current = this.root
        while (current !== null) {
            if (data < current.data) {
                current = current.left
            } else if (data > current.data) {
                current = current.right
            }else{
               return true
            }
        }
        return false
    }


    remove(data){
        this.removeHelper(data,this.root,null)
    }
    removeHelper(_data,_current,_parent){
        while(_current!==null){
            if(_data<_current.data){
                _parent=_current
                _current=_current.left
            }else if(_data>_current.data){
                _parent=_current
                _current=_current.right
            }else{
                if(_current.left!==null && _current.right!==null){
                   _current.data= this.getMinValue(_current.right)
                   this.removeHelper(_current.data,_current.right,_current)
                }else{
                    if(_parent===null){
                        if(_current.right===null){
                            this.root=_current.left
                        }else{
                            this.root=_current.right
                        }
                    }else{
                        if(_parent.left===_current){
                            if(_current.right===null){
                                _parent.left=_current.left
                             }else{
                                _parent.left=_current.right
                             }
                            
                        }else{  
                            if(_current.right===null){
                                _parent.right=_current.left
                             }else{
                                _parent.right=_current.right
                             }
                        }
                    }
                }
                break
                
            }
        } 
    }
    getMinValue(current){
        if(current.left===null){
            return current.data
        }else{
            return this.getMinValue(current.left)
        }
    }    

    // inOrder(){
    //     this.inorderHelper(this.root)
    // }
    // inorderHelper(node){
    //     if(node!==null){
    //         this.inorderHelper(node.left)
    //         console.log(node.data);     
    //         this.inorderHelper(node.right)
    //     }
    // }

     
    // preOrder(){
    //   this.preorderHelper(this.root)
    // }
    // preorderHelper(node){
    //  if(node!=null){ 
    //     console.log(node.data);
    //     this.preorderHelper(node.left)
    //     this.preorderHelper(node.right)
    //  }
    // }

    postOrder(){
        this.postOrderHelper(this.root)
    }
    postOrderHelper(node){
        if(node!==null){ 
            this.postOrderHelper(node.left)
            this.postOrderHelper(node.right)
            console.log(node.data);
        }
    }

    NearstValue(target){
        let currentNode=this.root
       let clossest=currentNode.data
        while(currentNode!=null){
            if(Math.abs(target-clossest)>Math.abs(target-currentNode.data)){
                clossest=currentNode.data
            }
            if(target<currentNode.data){
                currentNode=currentNode.left
            }else if(target>currentNode.data){
                currentNode=currentNode.right
            }else{
                break 
            }
            
            
        }
        return clossest
    }

}


let tree=new BinerySearchTree()
tree.Insert(10)
tree.Insert(5)
tree.Insert(30)
tree.Insert(40)
tree.Insert(67)
tree.Insert(43)
tree.Insert(23)
tree.Insert(12)
tree.Insert(95)

// tree.remove(5)
console.log(tree.contains(12));
// console.log(tree.contains(0));
// tree.inOrder()
// tree.preOrder()
// tree.postOrder()
console.log(tree.NearstValue(22));
