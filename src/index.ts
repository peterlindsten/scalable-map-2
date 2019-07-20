console.log("hello");
let body: HTMLBodyElement | null = document.querySelector<HTMLBodyElement>("body");
body!.insertAdjacentElement("beforeend", new HTMLDivElement());
