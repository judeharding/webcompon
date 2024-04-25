// REGISTERING MY COMPONENT - my-compa
class MyComponA extends HTMLElement {
	connectedCallback() {
		console.log("hello from my-compa LOADED callback");
		// RENDER THE HTML IN THE DOM of the Index.html file
		this.innerHTML = `
        <div id="compAdiv">DIV-A PLAIN DIV W/ SOME TEXT FROM THE INDEXA.JS file
            <div">
                <h1>Created Div to say - Hi Mike in H1</h1>

                <button id="btncompa">CLICK TO REMOVE ME from the WEBCOMPONENTA js file</button>
            </div>
        </div>
        `;

		// cannot use event listener INSIDE of the callback function because of scope?
		// this.querySelector("btncompa").addEventListener("click", dosomething);

		// event listener outside of the callback function to
		registerBtnCompA();
	}
}

customElements.define("my-compa", MyComponA);

// // --- END OF THE COMPNENT A

// -- EVENT LISTENER for COMPONENT A Button

function dosomething() {
	console.log("hello from function dosomethingcomponA ");

	const newDiv = document.createElement("my-compb");
	newDiv.setAttribute("id", "compBdiv");
	document.body.appendChild(newDiv);

	document.getElementById("compAdiv").remove();
}

function registerBtnCompA() {
	document.querySelector("#btncompa").addEventListener("click", dosomething);
}

// ---
