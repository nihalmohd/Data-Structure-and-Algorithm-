class trieNode{
    constructor(){
        this.childeren=new Map()
    }
}
class trie{
    constructor(){
        this.root=new trieNode()
        this.endSymbol="*"
    }
    Insert(word){
      let currentNode=this.root 
      for(i=0;i<word.length;i++){
        let char=word[i]
        if(!currentNode.children.has(char)){
            currentNode.children.set(char,new trieNode())
        }
        currentNode=currentNode.children.get(char)
      }
      currentNode.children.set(this.endSymbol,null) 
    }
    search(word){
        let currentNode=this.root
        for(i = 0 ; i < word.length ;i++){
            let char=word[i]
            if(!currentNode.children.has(char)){
                return false
            }
            currentNode=currentNode.children.get(char)
        }
        return currentNode.children.has(this.endSymbol)
    }
}