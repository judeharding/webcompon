// REGISTERING MY COMPONENT - my-compb

class MyComponB extends HTMLElement {
	connectedCallback() {
		console.log("hello from my-compb LOADED callback");
		// RENDER THE HTML IN THE DOM
		this.innerHTML = `
        <div id="compBdiv">DIV-B PLAIN DIV W/ SOME TEXT FROM THE INDEXB.JS file
            <div>
                <h2>Created Div to say - Hi Jude in H2</h2>

                <button id="btncompb">CLICK TO REMOVE ME from the WEBCOMPONENTB js file</button>
            </div>
        </div>
	
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

	const newDiv = document.createElement("my-compa");
	newDiv.setAttribute("id", "compAdiv");
	document.body.appendChild(newDiv);

	document.getElementById("compBdiv").remove();
}

function registerBtnCompB() {
	document.querySelector("#btncompb").addEventListener("click", dosomethingElse);
}
