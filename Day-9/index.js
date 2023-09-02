const color = document.getElementById('color');
const backgroundcolor = document.getElementById('backgroundcolor');
const padding  = document.getElementById('padding ');
const fontSize  = document.getElementById('fontSize ');
const fontWeight  = document.getElementById('fontWeight ');
const targetDiv = document.getElementById('targetDiv');

color.addEventListener('change', () => {
  targetDiv.style.color = color.value;
});

backgroundcolor.addEventListener('change', () => {
  targetDiv.style.backgroundColor = backgroundcolor.value;
});

padding .addEventListener('change', () => {
  targetDiv.style.padding = padding .value;
});

fontSize .addEventListener('change', () => {
  targetDiv.style.fontSize = fontSize .value;
});

fontWeight .addEventListener('change', () => {
  targetDiv.style.fontWeight = fontWeight .value;
});