let Color = ["green","cyan","black","voilet","blue","yellow","purple","orange","lightgreen",
	"lemon",];
let index = 0;
const circle = document.getElementById("circle");
const shape = document.querySelector(".shape");
const Changecolor = document.querySelector("#color");
const changeShape = document.querySelector("#changeShape");

Changecolor.addEventListener("click", () => {
	if (index === Color.length) {
		index = 0;
	}
	circle.style.backgroundColor = Color[index];
	index++;
})
let Tringle = false;
changeShape.addEventListener("click", () => {
	if (!Tringle) {
		let Shape = document.querySelector(".shape");
		Shape.className = "triangle";
		Tringle = true;
	}
	else {
		var shape = document.querySelector(".triangle");
		shape.className = "shape";
		Tringle = false;
	}
})
