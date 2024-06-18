// REGISTERING MY COMPONENT - my-compa

class MyComponA extends HTMLElement {
	connectedCallback() {
		console.log("hello from my-compa LOADED callback"); // WORKING
		// RENDER THE HTML IN THE DOM of the Index.html file
		this.innerHTML = `
                <button id="btncompa">the WEBCOMPONENTA button</button>
        `; // WORKING

		// cannot use event listener INSIDE of the callback function because of scope?
		// this.querySelector("btncompa").addEventListener("click", dosomething);

		// event listener outside of the callback function to
		registerBtnCompA();
	}
}

// this method is calling my component A
customElements.define("my-compa", MyComponA); // WORKING

// // --- END OF THE COMPNENT A

// -- EVENT LISTENER for COMPONENT A Button

function dosomething() {
	console.log("hello from function dosomethingcomponA "); // WORKING
	// document.querySelector("#myouterwebcomponent").innerHTML = "";
	document.querySelector("#jude").remove();
	var parentele = document.querySelector("#myouterwebcomponent");

	const newDiv = document.createElement("my-compb"); // WORKING
	newDiv.setAttribute("id", "mike"); // WORKING
	parentele.append(newDiv); // WORKING
}

function registerBtnCompA() {
	document.querySelector("#btncompa").addEventListener("click", dosomething); // WORKING
}

// ---

customElements.define(
	"wc-count",
	class extends HTMLElement {
		/**
		 * The class constructor object
		 */
		constructor() {
			// Always call super first in constructor
			super();

			// Now we're in business!
			// console.log(this);

			// Instance properties
			this.button = this.querySelector("button");
			this.count = 0;

			// Listen for click events
			this.button.addEventListener("click", this);

			// Announce UI updates
			this.button.setAttribute("aria-live", "polite");
		}

		/**
		 * Handle events
		 * @param  {Event} event The event object
		 */
		handleEvent(event) {
			console.log("clicked!", this); // WORKING

			this.count++;
			this.button.textContent = `Clicked ${this.count} Times`;
		}
	}
);
