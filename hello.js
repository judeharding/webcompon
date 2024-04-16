////Web Components below - class based has an event HANDLER for functions ONLY

// ----------------

// class Test extends HTMLElement {
// 	connectedCallback() {
// 		this.innerHTML = `
//         <div>some text</div>
//         <button id="btn" onclick="dosomething()">click</button>
//         `;
// 	}
// }

// customElements.define("cust-ele", Test);

// function dosomething() {
// 	console.log("hello from function");
// 	document.querySelector("#hellodiv").innerHTML = "hello from function";
// }

// ----------------
// ----------------
////method inside the class uses an event LISTENER for methods
class Test extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div>some text</div>
        <button id="btn" >click</button>
        `;
	}

	//method
	dosomething() {
		console.log("hello from button function");
		document.querySelector("#hellodiv").innerHTML = "hello from button function";
	}
}

customElements.define("cust-ele", Test);

//event listener
document.querySelector("#btn").addEventListener("click", function () {
	new Test().dosomething();
});
// ----------------
