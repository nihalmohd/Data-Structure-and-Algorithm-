class graph{
    constructor(){
        this.graph1=new Map();
    }
    addVertex(data){
        this.graph1.set(data,new Array())
    }
    insert(vertex,edge,isBi=false){
        if(!this.graph1.has(vertex)){
            this.addVertex(vertex)
        }
        if(!this.graph1.has(edge)){
            this.addVertex(edge)
        }
        if(!this.graph1.get(vertex).includes(edge)){
            this.graph1.get(vertex).push(edge)
        }
        if(isBi){
            if(!this.graph1.get(edge).includes(vertex)){
                this.graph1.get(edge).push(vertex)
            }
        }
    }
    display(){
        console.log(this.graph1)
    }
}

let Graph1=new graph();
Graph1.insert(10,2,true)
Graph1.insert(70,3,true)
Graph1.insert(90,24,true)
Graph1.insert(40,3,true)
Graph1.insert(80,2,true)
Graph1.display()