import {Component, h} from "preact";
import Two from "two.js";
import {Node} from "./node";

export interface AppCanvasProps {
    rootNode: Node;
}

const InitialAppCanvasState = {
    zoom: 1,
};

type AppCanvasState = typeof InitialAppCanvasState;

export class AppCanvas extends Component<AppCanvasProps, AppCanvasState> {
    public readonly state: AppCanvasState = InitialAppCanvasState;
    private canvasDiv;
    private two: Two | undefined;

    public componentWillMount(): void {
        this.two = new Two();
        this.two.type = Two.Types.canvas;
    }

    public componentDidMount(): void {
        if (this.two) {
            this.two.appendTo(this.canvasDiv);
        }
    }

    public render(props: AppCanvasProps, state: AppCanvasState) {
        if (this.two) {
            const two = this.two;
            props.rootNode.children.map((item, idx) => {
                two.makeRectangle(idx * 40, idx * 30, 40, 30);
            });
            two.update();
        }
        return (<div ref={(r) => this.canvasDiv = r}/>);
    }
}
