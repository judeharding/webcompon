// REGISTERING MY COMPONENT - my-compb

class MyComponB extends HTMLElement {
	connectedCallback() {
		console.log("hello from my-compb LOADED callback");
		// RENDER THE HTML IN THE DOM
		this.innerHTML = `
			<button id="btncompb">the WEBCOMPONENTB button</button> 
		`;

		// cannot use event listener INSIDE of the callback function because of scope?
		// this.querySelector("btncompa").addEventListener("click", dosomething);

		// event listener outside of the callback function to
		registerBtnCompB();
	}
}
customElements.define("my-compb", MyComponB);

// // --- END OF THE COMPONENT B ---

// -- EVENT LISTENER for COMPONENT B Button

function dosomethingELSE() {
	console.log("hello from function dosomethingcomponB ");

	// document.querySelector("#myouterwebcomponent").innerHTML = "";
	document.querySelector("#mike").remove();

	let myparent = document.querySelector("#myouterwebcomponent");

	const newDiv = document.createElement("my-compa");

	newDiv.setAttribute("id", "jude");
	myparent.prepend(newDiv);

	// document.querySelector("compBdiv").remove();
}

function registerBtnCompB() {
	document.querySelector("#btncompb").addEventListener("click", dosomethingELSE);
}
