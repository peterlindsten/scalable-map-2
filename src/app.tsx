import {Component, h} from "preact";
import {AppCanvas} from "./app-canvas";
import {AppHierachy} from "./app-hierarchy";
import {Node} from "./node";

export interface AppProps {
    name: string;
}

const InitialAppState = {
    name: "",
};

type AppState = typeof InitialAppState;

// Testdata
Node.rootNode.children = Node.rootNode.children.concat([new Node("1"), new Node("2"), new Node("3")]);

export class App extends Component<AppProps, AppState> {
    public readonly state: AppState = InitialAppState;

    public componentDidMount() {
        setTimeout(() => {
            const state = this.state;
            state.name = "Preact's componentDidMount worked as expected";
            this.setState(state);
        }, 2000);
    }

    public render(props: AppProps, state: AppState) {
        return (<div>
            <h1>props: {props.name} state: {state.name}</h1>
            <AppHierachy rootNode={Node.rootNode}/>
            <AppCanvas rootNode={Node.rootNode}/>
        </div>);
    }
}
