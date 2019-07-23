import { Component, h } from "preact";


export interface AppCanvasProps {
}

const InitialAppCanvasState = {
  name: ""
}

type AppCanvasState = typeof InitialAppCanvasState;

export class AppCanvas extends Component<AppCanvasProps, AppCanvasState> {
  public readonly state: AppCanvasState = InitialAppCanvasState;
  render(props: AppCanvasProps, state: AppCanvasState) {
    return (<canvas></canvas>);
  }
}
