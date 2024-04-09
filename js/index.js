console.log("Hello, Hello from js/index.js!");

import Counter from "./components/Counter.js";

// binding the component

customElements.define("counter-component", Counter);
