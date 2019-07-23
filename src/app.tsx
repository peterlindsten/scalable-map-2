import { h, Component } from "preact";
import { AppCanvas } from "./app-canvas";

export interface AppProps {
  name: string;
}

const InitialAppState = {
  name: ""
}

type AppState = typeof InitialAppState;

export class App extends Component<AppProps, AppState> {
  public readonly state: AppState = InitialAppState;
  componentDidMount() {
    setTimeout(() => {
      var state = this.state;
      state.name = "Preact's componentDidMount worked as expected";
      this.setState(state);
    }, 2000);
  }
  render(props: AppProps, state: AppState) {
    return (<div><h1>props: {props.name} state: {state.name}</h1><AppCanvas/></div>);
  }
}
