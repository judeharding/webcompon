// REGISTERING MY COMPONENT - my-compb

class MyComponB extends HTMLElement {
	connectedCallback() {
		// RENDER THE HTML IN THE DOM
		this.innerHTML = `
        <div id="compBdiv">DIV-B PLAIN DIV W/ SOME TEXT FROM THE INDEX.JS file
            <div id="div2">
                <h2>Created Div idofhellodiv to say - Hi Jude in H1</h2>

                <button id="btncompb">CLICK TO REMOVE ME</button>
            </div>
        </div>
        `;
		console.log("hello from my-compb LOADED");
		registerBtnCompB();
	}
}

customElements.define("my-compb", MyComponB);

// // ---

function dosomethingELSE() {
	console.log("hello from function dosomethingcomponB ");

	const newDiv = document.createElement("my-compa");
	document.body.appendChild(newDiv);

	document.getElementById("compBdiv").remove();
}

function registerBtnCompB() {
	document.querySelector("#btncompb").addEventListener("click", dosomething);
}
