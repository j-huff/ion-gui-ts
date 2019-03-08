import Node from './node';


class Config{
    nodes:Array<Node>;

    title:string = "";

    constructor(){
        this.nodes = new Array<Node>();
    }

    createNode(){
        let node = new Node();
        node.setName(""+this.nodes.length);
        this.nodes.push(node);
    }

    setTitle(title:string){
        this.title = title;
    }
}

export default Config;