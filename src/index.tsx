import { h, render } from "preact";
import { App } from "./app";
const app = document.createElement("div")
document.body.insertAdjacentElement("beforeend", app);

render(<App name="cool working"/>, app);
