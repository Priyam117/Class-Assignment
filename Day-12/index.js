var box = document.getElementById('box');
var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;
box.addEventListener("mouseover", function () {
	var boxAttr = box.getBoundingClientRect();
	var pos = getNewPosition(boxAttr.width, boxAttr.height);
	box.style.top = pos.y + "px";
	box.style.left = pos.x + "px";
});
function getNewPosition(boxWidth, boxHeight) {
	var newX = Math.floor((Math.random() * viewWidth) - boxWidth);
	var newY = Math.floor((Math.random() * viewHeight) - boxHeight);
	if (newX < 0) {
		newX = 0;
	}
	if (newY < 0) {
		newY = 0;
	}
	return { x: newX, y: newY };
}