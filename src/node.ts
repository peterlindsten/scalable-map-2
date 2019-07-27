export class Node {
    public static rootNode: Node = new Node("root", true);
    public parent: Node | null;
    public children: Node[] = [];
    public name: string = "";
    public relations: Set<Node> = new Set<Node>();

    constructor(name: string, root: boolean = false) {
        this.name = name;
        if (root) {
            this.parent = null;
        } else {
            this.parent = Node.rootNode;
        }
    }
}
