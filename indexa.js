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

	// document.getElementById("compAdiv").remove(); //  WORKING
	// document.getElementById("my-compa").remove(); // NOT WORKING

	// // Reference to the parent element containing the web component
	// const parentElement = document.getElementById("myouterwebcomponent");

	// // Reference to the web component itself
	// const webComponent = document.getElementById("my-compa");

	// // Remove the web component from the parent element
	// parentElement.removeChild(webComponent);
}

function registerBtnCompA() {
	document.querySelector("#btncompa").addEventListener("click", dosomething); // WORKING
}

// ---
