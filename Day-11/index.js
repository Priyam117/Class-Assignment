let container = document.querySelector(".container");
// container.style.backgroundColor = "black";
document.addEventListener("keydown", function (event) {
	container.innerText = "";
	// console.log(event);
	// The parameter event is of the type KeyboardEvent
	let div = document.createElement("div");
	div.style.display = "flex";
	div.style.alignItems = "center";
	div.style.justifyContent = "center";
	div.style.height = "300px";
	div.style.width = "700px";
	div.style.border = "1px solid black";
	div.style.borderRadius= "10px";
	div.style.backgroundColor = "black";

	let h1 = document.createElement("h1");
	h1.style.color = "cornsilk";
	h1.innerText = ` You Pressed "${event.key}"`;

	let p = document.createElement("p");
	p.style.color = "cornsilk";
	p.innerText = `${event.keyCode}`;

	container.appendChild(div);
	div.appendChild(h1);
	div.appendChild(p);
});