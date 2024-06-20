console.log("hello from compa.js");

// import compb from "./compb.js";

class Compa extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div>
        <H3>click button to feed her </H3>
        </div>

        <button id="btnfeed" onclick="feedher()">FEED HER</button>
        `;
	}
}

customElements.define("comp-a", Compa);

// ---
function feedher() {
	console.log("hello from function feed her ");

	let myparent = document.querySelector("#div2");
	// document.getElementById("div1").remove();
	sheIsFull();
	// const parabutt = document.createElement("button");
	// parabutt.setAttribute("id", "btn");
	// parabutt.setAttribute("onclick", "dosomethingELSE()");
	// parabutt.innerText = "JUDE REMOVED THAT AND SAID FEED ME!!!";
	// myparent.appendChild(parabutt);
}
