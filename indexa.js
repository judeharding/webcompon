// REGISTERING MY COMPONENT - my-compa
class MyComponA extends HTMLElement {
	connectedCallback() {
		// RENDER THE HTML IN THE DOM
		this.innerHTML = `
        <div id="compAdiv">DIV-A PLAIN DIV W/ SOME TEXT FROM THE INDEX.JS file
            <div id="div1">
                <h1>Created Div idofhellodiv to say - Hi Mike in H1</h1>

                <button id="btncompa">CLICK TO REMOVE ME</button>
            </div>
        </div>
        `;
		// this.querySelector("btncompa").addEventListener("click", dosomething);
		console.log("hello from my-compa LOADED");
		registerBtnCompA();
	}
}

customElements.define("my-compa", MyComponA);

// // ---

function dosomething() {
	console.log("hello from function dosomethingcomponA ");

	const newDiv = document.createElement("my-compb");
	document.body.appendChild(newDiv);

	document.getElementById("compAdiv").remove();
}

function registerBtnCompA() {
	document.querySelector("#btncompa").addEventListener("click", dosomething);
}
