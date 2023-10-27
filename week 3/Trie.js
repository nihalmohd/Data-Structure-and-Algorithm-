class trieNode{
    constructor(){
        this.children=new Map()
    }
}
class Trie{
    constructor(){
        this.root=new trieNode()  
        this.endSymbol="*";
    }
 insert(word){ 
    let currentNode=this.root
    for(let i=0 ;i<=word.length;i++){
        let char=word[i]
        if(!currentNode.children.has(char)){
            currentNode.children.set(char,new trieNode())
        }
        currentNode=currentNode.children.get(char)
        // console.log(currentNode);
    }
    currentNode.children.set(this.endSymbol,null)
 }
constains(word){
    let currentNode=this.root
    for(let i = 0 ; i<=word.length ;i++){
        let char=word[i]
        if(!currentNode.children.has(char)){
            return false
        }
        currentNode=currentNode.children.get(char)
    }
    return currentNode.children.has(this.endSymbol)
}

}
let trie=new Trie()
trie.insert("nihal")
console.log(trie.constains("nihal"))