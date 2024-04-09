console.log("hello from Counter.js");

export default class Counter extends HTMLElement {
	constructor() {
		super();
		// attaching the shadow dom
		this.attachShadow({ mode: "open" });
		this.render();
	}
	render() {
		this.shadowRoot.innerHTML = "<p>Hello, Is this working!</p>";
	}
}
