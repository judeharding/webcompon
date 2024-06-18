// https://www.youtube.com/watch?v=jfYWwQrtzzY
console.log("hello from script.js");

const draggables = document.querySelectorAll(".draggable");

const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
	draggable.addEventListener("dragstart", () => {
		console.log("drag started");
		draggable.classList.add("dragging");
	});

	draggable.addEventListener("dragend", () => {
		console.log("drag ended");
		draggable.classList.remove("dragging");
	});
});

containers.forEach((container) => {
	container.addEventListener("dragover", (e) => {
		console.log("drag over");

		e.preventDefault(); // changes cursor to show you can drop

		const afterElement = getDragAfterElement(container, e.clientY);
		console.log("afterElement", afterElement);

		const draggable = document.querySelector(".dragging");

		if (afterElement == null) {
			container.appendChild(draggable);
		} else {
			container.insertBefore(draggable, afterElement);
		}
	});
});

// drag and drop between containers
function getDragAfterElement(container, y) {
	// get a list of all draggable elements but NOT the one being dragged in the current container
	const draggablElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

	return draggablElements.reduce(
		(closest, child) => {
			const box = child.getBoundingClientRect();
			console.log("box", box);
			const offset = y - box.top - box.height / 2;
			console.log(offset);

			if (offset < 0 && offset > closest.offset) {
				return { offset: offset, element: child };
			} else {
				return closest;
			}
		},
		{ offset: Number.NEGATIVE_INFINITY }
	).element;
}
