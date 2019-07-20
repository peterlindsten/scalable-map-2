export class Node {
    public static rootNode: Node = new Node(true);
    public parent: Node | null;
    public name: string = "";
    public relations: Set<Node> = new Set<Node>();

    constructor(root: boolean = false) {
        if (root) {
            this.parent = null;
        } else {
            this.parent = Node.rootNode;
        }
    }
}
