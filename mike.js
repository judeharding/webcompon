console.log("testing from mike.js");

class Compone extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div>SOME TEXT FROM THE MIKE.JS file</div>
        <h1 id="hellodiv">Hi Mike in H1</h1>
        <button id="btn" onclick="dosomething()">CLICK TO REMOVE ME</button>
        `;
	}
}

customElements.define("comp-one", Compone);

// ---

function dosomething() {
	console.log("hello from function compone ");
	let myparent = document.querySelector("#div2");
	document.getElementById("div1").remove();
	dosomethingELSE();
	const parabutt = document.createElement("button");
	// parabutt.setAttribute("id", "btn");
	// parabutt.setAttribute("onclick", "dosomethingELSE()");
	parabutt.innerText = "JUDE REMOVED THAT AND SAID FEED ME!!!";
	myparent.appendChild(parabutt);
}

// swap out components in div 1 to div 2 and back to div 1 without using 2 components in html

// the first one can use an event handler
// the second one must use a method with listener

// -----

// class Comptwo extends HTMLElement {
// 	connectedCallback() {
// 		this.innerHTML = `
//         <div>SOME TEXT FROM JS</div>
//         <h1 id="hellodiv">Hi Mike in H1</h1>
//         <button id="btn" onclick="dosomething()">CLICK TO REMOVE ME</button>
//         `;
// 	}
// }

// customElements.define("comp-two", Comptwo);

function dosomethingELSE() {
	console.log("hello from function compTWO ");
	// <button>JUDE REMOVED THIS AND SAID TO FEED ME!</button>;

	// const parabutt = document.createElement("button");
	// parabutt.setAttribute("id", "btn");
	// parabutt.setAttribute("onclick", "dosomethingELSE()");
	// parabutt.innerText = "JUDE REMOVED THAT AND SAID FEED ME!!!";
	// document.body.appendChild(parabutt);
}
