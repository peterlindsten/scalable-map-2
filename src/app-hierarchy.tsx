import {h} from "preact";
import {Node} from "./node";

export interface AppHierarchyProps {
    rootNode: Node;
}

export const AppHierachy = (props: AppHierarchyProps) => (
    <ul>
        {props.rootNode.children.map((item: Node, idx) => (
            <li>{item.name}</li>
        ))}
    </ul>
);
